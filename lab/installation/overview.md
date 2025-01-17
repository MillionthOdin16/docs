---
id: overview
title: Installation overview
sidebar_label: Installation overview
slug: /installation
---

import CompatibilityWarning from '../templates/_compatibility_warning.mdx';

We recommend you use the `memgraph/memgraph-platform` Docker image to install
**Memgraph Platform** and get the complete streaming graph application platform
that includes:

- **MemgraphDB** - the database that holds your data
- **Memgraph Lab** - visual user interface for running queries and visualizing
  graph data
- **mgconsole** - command-line interface for running queries
- **MAGE** - graph algorithms and modules library

After running the image, mgconsole will open in the terminal while Memgraph Lab
is available on `http://localhost:3000`. 

You can install Memgraph Platform on:

<p align="left">
  <a href="/memgraph/install-memgraph-on-windows-docker" style={{'paddingRight':'70px'}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png" alt="windows" title="windows" width="80"/>
  </a>
  <a href="/memgraph/install-memgraph-on-macos-docker" style={{'paddingRight':'70px'}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1024px-MacOS_logo.svg.png" alt="macos" title="macos" width="80"/>
  </a>
  <a href="/memgraph/install-memgraph-on-linux-docker">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg" alt="linux" title="linux" width="80"/>
  </a>
</p>

If you already have a running Memgraph database instance and you want to install
Memgraph Lab as a desktop application, check out the installation instructions
for [Windows](/memgraph-lab/installation/windows),
[macOS](/memgraph-lab/installation/macos) and
[Linux](/memgraph-lab/installation/linux).

<CompatibilityWarning/>
