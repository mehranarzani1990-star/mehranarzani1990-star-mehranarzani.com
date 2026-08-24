# mehranarzani.com — Recovery Repository

This repository is a **safe reconstructed source snapshot** of the live website as observed on 23 Aug 2026.

## Safety status
- The live production website remains on Cloudflare Pages.
- This repository is **NOT connected to Cloudflare** yet.
- Do not switch production to this repository until visual verification is complete.
- The original React/Vinext development source was not available in the recovered ChatGPT file archive, so this is a maintainable static reconstruction rather than a claim that the original source code was recovered byte-for-byte.

## Recovered content
- Homepage hero, About, Education & Research Interests, cylindrical cell assembly, EV-manufacturing section, and Contact.
- Publications, Awards, Conferences, Books, Patents, Teaching & Mentorship, and News pages.
- 45-frame cylindrical-battery assembly animation with the requested dark animated wave background.
- One confirmed UIC recognition asset from the user file archive.

## Local preview
Serve `dist/` from a local HTTP server:
```bash
python3 -m http.server 8080 --directory dist
```
Then open http://localhost:8080/

## Production deployment record
Historical production target: Cloudflare Pages project `mehran-arzani-website`.
Previously recovered command:
```bash
npx wrangler pages deploy ./dist --project-name mehran-arzani-website
```
**Do not run this until the recovered copy is approved.**

## Next recovery pass
Restore exact original image/media assets and compare each page against the live site. Once verified, this repository can become the source of truth and an automated deployment workflow can be enabled.
