---
id: memgraph-faq
title: Memgraph - Frequently asked questions
sidebar_label: Memgraph
slug: /faq/memgraph
---

## About Memgraph

### What is Memgraph?

Memgraph is an **open source graph database** built for teams who expect highly
performant, advanced analytical insights - as compatible with your current
infrastructure as Neo4j (but up to 120x faster). Memgraph is powered by an
in-memory graph database built to handle real-time use-cases at enterprise
scale. Memgraph supports **strongly-consistent ACID transactions** and uses the
standardized **Cypher query language** for structuring, manipulating, and exploring
data.

### What is the difference between Memgraph and Memgraph Platform?

There are three official Docker images for Memgraph:

* `memgraph/memgraph` - the most basic MemgraphDB instance.
* `memgraph/memgraph-mage` - the image contains a MemgraphDB instance together
  with all the newest [MAGE](/mage) modules and graph algorithms.
* `memgraph/memgraph-platform` - the image contains MemgraphDB, Memgraph Lab,
  mgconsole and MAGE. Once started, mgconsole will be opened in the terminal,
  while Memgraph Lab is available at `http://localhost:3000`.

## Installation & upgrade

### How to install Memgraph on Windows?

Memgraph cannot be installed natively on Windows devices but can be installed
using **Docker** or through the **Windows Subsystem for Linux (WSL)**. Docker is
an open platform for developing, shipping, and running applications. Docker
enables us to run Memgraph virtually on any system without having to worry about
compatibility issues. You don't have to be familiar with Docker to try out
Memgraph. Just [install Docker](https://docs.docker.com/get-docker/) and head
over to our [installation instructions for
Windows](/memgraph/install-memgraph-on-windows-docker).

### How to install Memgraph on macOS?

Memgraph cannot be installed natively on macOS devices but can be installed
using **Docker**. Docker is an open platform for developing, shipping, and
running applications. Docker enables us to run Memgraph virtually on any system
without having to worry about compatibility issues. You don't have to be
familiar with Docker to try out Memgraph. Just [install
Docker](https://docs.docker.com/get-docker/) and head over to our [installation
instructions for macOS](/memgraph/install-memgraph-on-macos-docker).

### Can I only use Memgraph Lab without Memgraph?

Memgraph Lab is a visual interface for exploring and interacting with data
stored in Memgraph. This means that Memgraph Lab needs a running Memgraph
instance in the background to be able to connect to it. After you have
[installed](/memgraph/installation) and started Memgraph, you can head over to
Memgraph Lab and start querying your graph.

### How do you upgrade?

To do software upgrades, the whole cluster has to go down. Before that data has
to be migrated to a cluster with the newer version of Memgraph. At the moment,
we offer no downtime upgrades, but that’s a feature which is high on our
priority list. What we do offer is support when the upgrade is needed.

## openCypher language

### How do you interface with the system?

Memgraph supports the [openCypher](http://www.opencypher.org) query language to
query the database instance. It’s a declarative query language designed to query
graphs. Communication between clients and the database is done via the [Bolt
protocol](https://boltprotocol.org). Check out [the list of supported programming
languages](/memgraph/connect-to-memgraph/drivers).

### What are the Cypher implementation differences compared to Neo4j?

Although we tried to implement openCypher query language as closely to the
language reference as possible, we made some changes that can enhance the user
experience. You can find the differences listed in the [Cypher
manual](/cypher-manual/differences).

### Can you implement custom Cypher procedures?

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded on startup.
[Query modules can be
implemented](/memgraph/how-to-guides/query-modules/implement-query-modules)
using the Python API or C API.

### How to change the directory where query modules are stored?

You can change the directory where query modules are stored by using the
`--query-modules-directory` flag. For more information about using configuration
flags, check out the [Reference guide](/memgraph/reference-guide/configuration).

## Memgraph & cloud

### Does Memgraph offer a cloud graph database as a service?

Yes, we offer fully-managed Memgraph on our cloud infrastructure as a service.
For more details please visit [Memgraph Cloud
pages](https://cloud.memgraph.com/) or check out the [Cloud
documentation](/memgraph-cloud). In addition, [Memgraph
Playground](https://playground.memgraph.com/) is a testing environment where you
can play with various graph datasets.

### Can Memgraph be deployed in the cloud?

Yes, Memgraph can be deployed in the cloud. Memgraph is designed to be portable,
but currently available only on the x86_64 architecture. All standard Linux
distributions like CentOS, Debian, Ubuntu, RedHat are supported. Memgraph is
also available on Docker. For any other platforms, please drop us an email at
[tech@memgraph.com](mailto:tech@memgraph.com) or get in touch with our team on
our [Forum](https://discourse.memgraph.com/).

### How far have you scaled your system?

It depends on the dataset and the queries, in other words, the workload. On a
single machine, Memgraph scales up to the size of the main memory. In a
distributed system, the graph is automatically repartitioned in the background
to improve query execution time and scalability.

## Memory usage

### What does the hardware footprint look like?

Memgraph uses ~50GB to store 100M nodes and 100M edges with one label and one
property per each node and an edge type and one property per edge.

### Does being in-memory mean that Memgraph will lose all data upon system failure or restart?

No. Memgraph uses RAM as the primary storage for data. However, Memgraph
continuously backs up data to disk with transaction logs and periodic snapshots.
On restart, Memgraph uses the snapshot and log files to recover its state to
what it was before shutting down.

### Can you change the memory limit for Memgraph?

You can change the memory limit by using the `--memory-limit` flag. If you want
to allocate 2GB for Memgraph then you would use `--memory-limit=2000`. For more
information about using configuration flags, check out the [Reference
guide](/memgraph/reference-guide/configuration).

### Why is my Memgraph instance relatively slow?

Label indexing is not enabled by default in Memgraph, i.e., Memgraph will not
automatically index labeled data. Therefore, it is up to the user to perform the
indexing explicitly. Visit the [Reference
guide](/memgraph/reference-guide/indexing) to find out more about creating
indexes.

## Logging

### Can you change the log level in Memgraph?

You can change the log level easily by using the `--log-level` flag. The allowed
values are `TRACE` , `DEBUG` , `INFO` , `WARNING` , `ERROR` , and `CRITICAL` .
For more information about using configuration flags, check out the [Reference
guide](/memgraph/reference-guide/configuration).

### How to change the directory where log files are stored?

You can change the directory where log files are stored by using the
`--log-file` flag. For more information about using configuration flags, check
out the [Reference guide](/memgraph/reference-guide/configuration).

## Data durability & persistence

### How does Memgraph ensure durability? How does Memgraph persist data?

Memgraph uses two mechanisms to ensure data durability:

* **write-ahead logs** (WAL) and
* periodic **snapshots**.

**Snapshots** are taken periodically during the entire runtime of Memgraph. When
a snapshot is triggered, the whole data storage is written to the disk.
**Write-ahead logs** save all database modifications that happened to a file.

### How to change the directory where snapshots are stored?

You can change the directory where snapshots are stored by using the
`--data-directory` flag. For more information about using configuration flags,
check out the [Reference guide](/memgraph/reference-guide/configuration).

## Other

### Do you support Tinkerpop API stacks?

Memgraph doesn’t support the Tinkerpop API stack because Tinkerpop is highly
dependent on the Java stack. Memgraph is implemented in C/C++/Assembly with
openCypher and the Bolt protocol as an interface. We have considered Tinkerpop
integration, but at the moment it’s not one of our highest priorities.


### Which types of indexes does Memgraph support?

Memgraph supports two types of indexes:

- label index
- label-property index

Please take a look at our [documentation on
indexing](/docs/memgraph/reference-guide/indexing) for more details.
