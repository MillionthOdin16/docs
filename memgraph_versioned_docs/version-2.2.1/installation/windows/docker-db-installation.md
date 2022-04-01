---
id: docker-db-installation
title: Install Memgraph DB on Windows with Docker
sidebar_label: Docker
slug: /install-memgraph-db-on-windows-docker
pagination_prev: installation/overview
pagination_next: connect-to-memgraph/overview
---

This article briefly outlines the basic steps necessary to install and run
**Memgraph DB** on Windows with Docker.

:::caution

Newer versions of Memgraph are currently **not backward compatible** with older
versions. That is why you won't be able to load storage snapshots between
different versions.

:::

## Prerequisites {#prerequisites}

Before you proceed with the installation guide, make sure that you have:

- **Docker Desktop** - [Install Docker](https://docs.docker.com/get-docker/) in
order to install Memgraph DB.

:::info

Memgraph's Docker image was built with **Docker version `1.12`** and should be
compatible with all newer versions.

:::

## Install Memgraph DB {#base-installation-guide}

**1.** Download the latest **Memgraph Docker image** from the [Download
Hub](https://memgraph.com/download/).

**2.** Import the image using the following command:

```console
docker load -i /path-to/memgraph-<version>-docker.tar.gz
```

## Start Memgraph DB {#starting-memgraph}

To start Memgraph DB, use the following command:

```console
docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph
```

If successful, you should see a message similar to the following:

```console
You are running Memgraph vX.X.X
To get started with Memgraph, visit https://memgr.ph/start
```

At this point, the Memgraph database is ready for you to [submit Cypher
queries](/connect-to-memgraph/overview.mdx) via a command-line tool **mgconsole**,
visual user interface **Memgraph Lab** or various **drivers**.

:::info

The username and password for connecting to the database are empty by default.

:::

## Stop Memgraph DB {#stopping-memgraph}

To stop a Memgraph database instance, run the following command:

```console
docker stop CONTAINER_ID
```

You can find the name of the container (`CONTAINER_ID`) by running:

```console
docker ps
```

## Configuration file and logs {#named-volumes}

If you need to access the Memgraph configuration file or logs, you will need to
specify the following volumes when starting Memgraph through **PowerShell**:

```console
docker run -p 7687:7687
  -v mg_lib:/var/lib/memgraph `
  -v mg_log:/var/log/memgraph `
  -v mg_etc:/etc/memgraph `
  memgraph --bolt-port=7687
```

The configuration file is located in the `mg_etc` volume. The exact location of
the file depends on your specific setup, but usually it is
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. 

The logs will be saved to the `mg_log` volume, and the directories can usually be find in
`\\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes\`.

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -p 7687:7687 memgraph --bolt-port=7687
```
:::caution

When working with Memgraph DB, you should pass configuration flags as arguments.

For example, you should start the Memgraph DB image with `docker run memgraph
--bolt-port=7687`, and Memgraph Platform with `docker run -e MEMGRAPH="--bolt-port=7687"
memgraph/memgraph-platform`.

:::

To learn about all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

## Where to next? {#where-to-next}

If you need more information on working with Docker, check out our **[guide on how
to work with Docker](/how-to-guides/work-with-docker.md)**.<br/>
To learn how to query the database, take a look at the
**[querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building applications](/connect-to-memgraph/drivers/overview.md)**
page if you need to connect to the database programmatically.

## Getting help {#getting-help}

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/windows/windows-installation-troubleshooting.md)** to see
if we have already covered the topic. For more information on the installation
process and for additional questions, visit the **[Help Center](/help-center)**
page.