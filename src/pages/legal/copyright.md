---
layout: ../../layouts/Default.astro
title: Open-source notices — MyBodyPrism
description: Third-party software notices and licenses bundled with the MyBodyPrism Viewer.
---

<div class="container narrow">

# Open-source notices

This page mirrors the `COPYRIGHT.txt` file shipped with each release of the
MyBodyPrism Desktop Viewer. The viewer bundles third-party open-source
software; this notice acknowledges those projects and their licenses.

> **Note:** This list is regenerated at viewer-release time. The version
> below corresponds to the latest released installer. For the version on
> your machine, see `Help → About → Open-source notices` inside the
> viewer.

## MyBodyPrism Desktop Viewer

Copyright (c) 2026 MyBodyPrism. Licensed under the proprietary terms in the
[EULA](/legal/eula). All rights reserved.

## Bundled third-party libraries

### Python runtime

Python is licensed under the Python Software Foundation License Version 2.

### Visualization Toolkit (VTK)

VTK is licensed under the BSD 3-Clause License.

```
Copyright (c) Ken Martin, Will Schroeder, Bill Lorensen
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
[BSD-3-Clause text — full text included in installer COPYRIGHT.txt]
```

### Insight Toolkit (ITK)

ITK is licensed under the Apache License 2.0.

### NumPy

NumPy is licensed under the BSD 3-Clause License.

### pydicom

pydicom is licensed under the MIT License.

### PyQt5 (or PySide6)

PyQt5 is licensed under the GPL v3 or a commercial license; the MyBodyPrism
Desktop Viewer ships under terms compatible with the chosen PyQt licensing
arrangement. See the installer's bundled `COPYRIGHT.txt` for the exact
choice and the corresponding offer-to-supply-source statement where
applicable.

### Other libraries

A complete list of every bundled package, version, license, and
attribution is included in `COPYRIGHT.txt` inside the viewer install
directory.

## How to obtain source

Where the license of a bundled library requires it (e.g. LGPL/GPL), we
make the corresponding source available on request to
<support@mybodyprism.com>. Please include the viewer version printed in the
About dialog.

</div>

<style>
  .container.narrow { max-width: 760px; padding: 2rem 1.25rem 4rem; }
  .container.narrow h1 { margin-top: 1rem; }
  .container.narrow blockquote {
    border-left: 3px solid var(--c-warm);
    background: rgba(255, 107, 74, 0.07);
    padding: 0.75rem 1rem;
    color: var(--c-warn);
    border-radius: 0.25rem;
  }
</style>
