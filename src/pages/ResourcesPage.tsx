import React, { useState } from 'react';
import TlbsEyebrow from '../components/tlbs/TlbsEyebrow';
import TlbsShell from '../components/tlbs/TlbsShell';
import OptInDialog, { type OptInFormData } from '../components/OptInDialog';
import { resources } from '../data/tlbs';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { postToWebhook } from '../services/webhookService';

const RESOURCE_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Qum6zwDsfvHsbXiehFQR/webhook-trigger/c5251ed6-c875-41ec-9fd7-b43bafffedca';

const ResourcesPage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedResource, setSelectedResource] = useState<string>('');

  useDocumentTitle(
    'Resources | TLBS',
    'Framework guides, audits, tools, and assessments to build seven-figure authority.'
  );

  const handleResourceClick = (resourceTitle: string) => {
    setSelectedResource(resourceTitle);
    setDialogOpen(true);
  };

  const handleOptInSubmit = async (formData: OptInFormData) => {
    setIsSubmitting(true);

    try {
      const result = await postToWebhook(RESOURCE_WEBHOOK_URL, {
        fullName: formData.fullName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        tag: selectedResource,
        source: 'Thought Leadership Business School',
        type: 'resource',
        timestamp: new Date().toISOString(),
      });

      if (result.success) {
        // Close dialog and handle resource access
        setDialogOpen(false);
        setIsSubmitting(false);

        // Find the selected resource
        const resource = resources.find(r => r.title === selectedResource);

        // Handle different resource types
        if (selectedResource.includes('Masterclass')) {
          // Redirect to free training page
          window.location.href = '/free-training';
        } else if (selectedResource.includes('Quiz')) {
          // For quiz, show success and mention email
          alert('Quiz access granted! Check your email for the assessment link.');
        } else if (resource && resource.file) {
          // For downloads, trigger automatic download
          const link = document.createElement('a');
          link.href = resource.file;
          link.download = resource.file.split('/').pop() || 'download.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          alert('Resource downloaded successfully! Check your downloads folder.');
        } else {
          // For other resources, show success message
          alert('Resource access granted! Check your email for the download link.');
        }
      } else {
        throw new Error(result.error || 'Failed to process your request');
      }
    } catch (error) {
      setIsSubmitting(false);
      throw error;
    }
  };

  return (
    <div className="border-t border-tlbs-border py-16 md:py-24">
      <TlbsShell>
        <TlbsEyebrow>Resources</TlbsEyebrow>
        <h1 className="mx-auto max-w-3xl text-center font-serif text-tlbs-display font-normal leading-tight text-tlbs-cream">
          Begin Building Your Authority
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center font-light text-[0.94rem] text-tlbs-cream/70">
          Gated lead magnets route to nurture sequences in GHL. Highest-converting assets are called out
          below.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {resources.map((r, i) => (
            <div
              key={r.title}
              className="flex flex-col border border-tlbs-border bg-tlbs-card p-8 transition-colors hover:border-tlbs-gold/35"
            >
              <h2 className="font-serif text-lg font-normal text-tlbs-cream">{r.title}</h2>
              <p className="mt-3 flex-grow font-light text-sm leading-relaxed text-tlbs-cream/65">
                {r.description}
              </p>
              {r.title.includes('Masterclass') ? (
                <button
                  type="button"
                  onClick={() => handleResourceClick(r.title)}
                  className="mt-8 inline-flex w-fit rounded-tlbs border-2 border-tlbs-gold px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-tlbs-gold hover:bg-tlbs-gold/10"
                >
                  {r.cta}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleResourceClick(r.title)}
                  className="mt-8 w-fit rounded-tlbs bg-tlbs-gold px-5 py-2.5 text-left text-[0.72rem] font-bold uppercase tracking-[0.06em] text-tlbs-black hover:bg-tlbs-gold-lt"
                >
                  {r.cta}
                </button>
              )}
              {(i === 1 || i === 2) && (
                <p className="mt-3 text-xs text-tlbs-gold/80">High-converting TLBS lead magnet</p>
              )}
            </div>
          ))}
        </div>

        <OptInDialog
          isOpen={dialogOpen}
          programName={selectedResource}
          onClose={() => setDialogOpen(false)}
          onSubmit={handleOptInSubmit}
          isLoading={isSubmitting}
        />
      </TlbsShell>
    </div>
  );
};

export default ResourcesPage;
