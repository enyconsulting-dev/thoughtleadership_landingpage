# Security review

**Review date:** 2026-11-18
**Scope:** npm dependency audit of `package-lock.json`, compared with `package.json`.

## Scope limitation

The requested source-code and deployment-configuration review could not be completed: the delegated security-review service failed before starting because of a DNS/network error. This report therefore records dependency advisories only. It does not assert that application-code flows, hosting headers, webhook behavior, or deployment settings were reviewed.

## Audit results

`npm audit` reported 20 vulnerable package entries in the complete dependency tree: 11 high, 8 moderate, and 1 low. `npm audit --omit=dev` reported 8 entries in the production dependency tree: 4 high and 4 moderate. Multiple advisories for the same package are grouped below. Presence in the dependency tree is confirmed; exploitability depends on whether vulnerable package behavior is reachable with attacker-controlled input and, for development tools, whether the affected tool is exposed.

| Severity | Package (locked version) | Scope | Risk |
|---|---|---|---|
| Low | `@babel/core` 7.29.0 | Development | Arbitrary file read via attacker-controlled `sourceMappingURL` comments. GHSA-4x5r-pxfx-6jf8. |
| Moderate | `@humanfs/node` 0.16.7 | Development | Recursive copy can follow symlinks and copy data outside the source tree. GHSA-p498-v437-472g. |
| Moderate | `@remix-run/router` 1.23.2 | Production | Protocol-relative `//` redirect can escape a same-origin target. GHSA-2j2x-hqr9-3h42. |
| Moderate | `ajv` 6.12.6 | Development | ReDoS when the `$data` option is used. GHSA-2g4f-4pwh-qvx6. |
| Moderate | `baseline-browser-mapping` 2.9.19 | Development | Invalid input can terminate processing and cause denial of service. GHSA-w5vr-8v7q-w6rv. |
| High | `brace-expansion` 1.1.12 | Development | Several denial-of-service conditions, including excessive expansion, CPU use, and recursion. GHSA-f886-m6hf-6m8v, GHSA-3jxr-9vmj-r5cp, GHSA-mh99-v99m-4gvg, GHSA-rgw5-rvv9-x895, GHSA-q2hr-2g5m-vwhr, GHSA-qhr7-859c-m2p7, GHSA-6j4f-fj2g-mc7p. |
| High | `browserslist` 4.28.1 | Development | Unbounded memory growth and crash/prototype-write risks with untrusted custom stats. GHSA-c83g-rgw3-j3cx, GHSA-73wf-gq98-2v4g. |
| Moderate | `esbuild` 0.21.5 | Development | A website can send requests to the development server and read responses. GHSA-67mh-4wv8-2f99. |
| High | `flatted` 3.3.3 | Development | Unbounded-recursion denial of service and prototype pollution during parsing. GHSA-25h7-pfq9-p65f, GHSA-rf6f-7fwh-wjgh. |
| High | `js-yaml` 4.1.1 | Development | Quadratic CPU denial of service through YAML merge keys and aliases. GHSA-h67p-54hq-rp68, GHSA-52cp-r559-cp3m, GHSA-5p4m-2wfm-xmqj, GHSA-2883-xcg3-v3hh. |
| High | `minimatch` 3.1.2 | Development | ReDoS with crafted wildcard and extglob patterns. GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj, GHSA-23c5-xmqv-rm74. |
| High | `nanoid` 3.3.11 | Production | Affected generators can loop indefinitely for invalid sizes; integer overflow is also reported. GHSA-28wg-ghj8-5hjv, GHSA-2v37-7h3g-55p8, GHSA-xwg4-73v4-xw9w. |
| High | `picomatch` 2.3.1 and nested 4.x | Production | ReDoS and incorrect glob matching for crafted patterns. GHSA-3v7f-55p6-f55p, GHSA-c2c7-rcm5-vvqj, GHSA-fc5q-39xc-vjpf. |
| High | `postcss` 8.5.6 | Production | CSS stringification XSS and arbitrary `.map` file disclosure/path traversal via attacker-controlled source-map comments. GHSA-qx2v-qp2m-jg93, GHSA-6g55-p6wh-862q, GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849. |
| Moderate | `postcss-selector-parser` 6.1.2 | Production | Denial of service from uncontrolled AST recursion or complex selector parsing. GHSA-w9m9-85wc-3x92, GHSA-rj75-hqrm-r3gf. |
| Moderate | `react-router` 6.30.3 | Production | Open-redirect issues; an SSR hydration constructor-injection advisory also applies if that SSR path is used. GHSA-wrjc-x8rr-h8h6, GHSA-337j-9hxr-rhxg, GHSA-2j2x-hqr9-3h42. |
| Moderate | `react-router-dom` 6.30.3 | Production | Open redirect that can lead to XSS in affected redirect flows. GHSA-jjmj-jmhj-qwj2. |
| High | `rollup` 4.57.1 | Development | Arbitrary file write via path traversal. GHSA-mw96-cpmx-2vgc. |
| High | `source-map-js` 1.2.1 | Production | Event-loop denial of service from crafted indexed source maps. GHSA-68fv-2mgg-jv7q. |
| High | `vite` 5.4.21 | Development | Multiple development-tool advisories, including path traversal, cross-origin script execution, and Windows editor-launch issues. GHSA-4w7w-66w2-5vf9, GHSA-v6wh-96g9-6wx3, GHSA-698v-4r3x-3vcv, GHSA-r825-w8mm-5pxw, GHSA-587h-7wmj-h5pm, GHSA-9jrq-w75r-8gcw, GHSA-rq7h-c2jc-7f22, GHSA-fx2h-pf6j-xcff. |

## Recommended remediation

1. Update vulnerable dependencies and regenerate the lockfile. npm reported an available fix for the production findings; review any major-version changes rather than forcing them automatically.
2. Prioritize the production findings, especially PostCSS, Picomatch, Nanoid, and React Router. Confirm redirect targets are constrained to trusted same-origin paths and do not process untrusted source maps or glob patterns.
3. Upgrade development dependencies as well. Keep the Vite development server bound to localhost and do not expose it to untrusted networks.
4. Re-run `npm audit` and `npm audit --omit=dev`, then run the build and lint checks.
5. Complete a source-code and hosting review when the review service is available, including webhook handling, input validation, content-security policy/security headers, and deployment exposure.
