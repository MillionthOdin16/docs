module.exports = {
  gqlalchemy: [
    "getting-started",
    "installation",
    {
      type: "category",
      label: "How-to guides",
      link: { type: "doc", id: "how-to-guides/overview" },
      items: [
        {
          type: "doc",
          label: "Use object graph mapper",
          id: "how-to-guides/ogm",
        },
        {
          type: "doc",
          label: "Use query builder",
          id: "how-to-guides/query-builder",
        },
        {
          type: "category",
          label: "Manage streams",
          items: [
            "how-to-guides/streams/kafka-streams",
            "how-to-guides/streams/pulsar-streams",
          ],
        },
        {
          type: "category",
          label: "Import data from different sources",
          items: [
            "how-to-guides/loaders/table-to-graph-importer",
            "how-to-guides/loaders/custom-file-system-importer",
          ],
        },
        {
          type: "category",
          label: "Manage instances",
          items: [
            "how-to-guides/instance-runner/memgraph-docker-instance",
            "how-to-guides/instance-runner/memgraph-binary-instance",
          ],
        },
        "how-to-guides/triggers/triggers",
        "how-to-guides/on-disk-storage/on-disk-storage",
        "how-to-guides/query-builder/graph-projection",
        "how-to-guides/networkx"
      ],
    },
    /*
    {
      type: "category",
      label: "Tutorials",
      items: ["tutorials/overview"],
    },
    "networkx",
    */
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        title: "Reference",
        description: "The reference documentation for GQLAlchemy.",
        slug: "/reference",
      },
      items: [
        "reference/disk_storage",
        "reference/instance_runner",
        "reference/models",
        {
          type: "category",
          label: "transformations",
          items: [
            "reference/transformations/export",
            {
              type: "category",
              label: "importing",
              items: [
                "reference/transformations/importing/import",
                "reference/transformations/importing/loaders",
              ]
            },
            {
              type: "category",
              label: "translators",
              items: [
                "reference/transformations/translators/dgl_translator",
                "reference/transformations/translators/pyg_translator",
                "reference/transformations/translators/nx_translator",
              ]
            }

          ],
        },
        "reference/utilities",
        {
          type: "category",
          label: "graph_algorithms",
          items: [
            "reference/graph_algorithms/integrated_algorithms",
            "reference/graph_algorithms/query_builder",
            "reference/graph_algorithms/query_modules",
          ],
        },
        {
          type: "category",
          label: "query_builders",
          items: [
            "reference/query_builders/declarative_base",
            "reference/query_builders/memgraph_query_builder",
          ],
        },
        {
          type: "category",
          label: "vendors",
          items: [
            "reference/vendors/database_client",
            "reference/vendors/memgraph",
            "reference/vendors/neo4j",
          ],
        },
      ],
    },
    "changelog",
  ],
};
