# STATUS — mybodyprism-com

> Machine-written 2026-07-18 by the portfolio review. Activity is derived from **last commit**,
> not folder mtime — every directory shows a recent write from tooling passes.

**Brand:** mybodyprism.com
**Tier:** T1 ships
**Status:** active
**Last substantive commit:** 2026-06-21 - feat: premium redesign + BodyPrism prism-mark logo
**Frozen because:** n/a
**Patent dockets:** none
**Freeze tag:** n/a

## Depends on
- _none_

## Depended on by
- _none_

## If deleted
```
Serves mybodyprism.com - the product site. Canonical of the two web repos.
```

## Notes

- CLAUDE.md lines 11,12,91 are STALE: they describe GoDaddy 301 forwarding that was abandoned 2026-05-17. bolthouselabs.com is served by GitHub Pages from the bolthouselabs-com repo.
- Route 53 zone is shared with AWS-HIPPA and holds SES DKIM/SPF/DMARC - nameserver changes would break backend email.

