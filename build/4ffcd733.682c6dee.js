(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(7),o=(a(0),a(198)),r={id:"import-data",title:"Import data",sidebar_label:"Import data"},l={unversionedId:"database-functionalities/import-data",id:"database-functionalities/import-data",isDocsHomePage:!1,title:"Import data",description:"Memgraph comes with tools for importing data into the database. Data can be",source:"@site/docs/database-functionalities/import-data.md",slug:"/database-functionalities/import-data",permalink:"/docs/memgraph/database-functionalities/import-data",editUrl:"https://github.com/g-despot/docs/tree/main/docs/database-functionalities/import-data.md",version:"current",sidebar_label:"Import data",sidebar:"memgraph",previous:{title:"Database functionalities overview",permalink:"/docs/memgraph/database-functionalities"},next:{title:"Inspecting queries",permalink:"/docs/memgraph/database-functionalities/inspecting-queries"}},s=[{value:"CSV Import Tool",id:"csv-import-tool",children:[]},{value:"Importing Cypher Queries",id:"importing-cypher-queries",children:[]}],p={toc:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Memgraph comes with tools for importing data into the database. Data can be\nimported either using the ",Object(o.a)("a",{parentName:"p",href:"#csv-import-tool"},"CSV import tool")," or using saved\n",Object(o.a)("a",{parentName:"p",href:"#importing-cypher-queries"},"cypher queries")," with ",Object(o.a)("inlineCode",{parentName:"p"},"mg_client")," running in non-interactive\nmode."),Object(o.a)("div",{className:"admonition admonition-info alert alert--info"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},Object(o.a)("strong",{parentName:"p"},"NOTE:")," ",Object(o.a)("inlineCode",{parentName:"p"},"mg_client")," is deprecated tool still coming within Memgraph package.\n",Object(o.a)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," will replace ",Object(o.a)("inlineCode",{parentName:"p"},"mg_client")," in\nthe future. If possible, please use ",Object(o.a)("inlineCode",{parentName:"p"},"mgconsole")," instead."))),Object(o.a)("h3",{id:"csv-import-tool"},"CSV Import Tool"),Object(o.a)("p",null,"CSV is a universal and very versatile data format used to store large\nquantities of data.  Each Memgraph database instance has a CSV import tool\ninstalled called ",Object(o.a)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for\ninitial bulk ingestion of data into the database.  Upon ingestion, the CSV\nimporter creates a snapshot that will be used by the database to recover its\nstate on its next startup."),Object(o.a)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",Object(o.a)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",Object(o.a)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),".  If\nyou already have a pipeline set-up for Neo4j, you should only replace\n",Object(o.a)("inlineCode",{parentName:"p"},"neo4j-admin import")," with ",Object(o.a)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),Object(o.a)("h4",{id:"csv-file-format"},"CSV File Format"),Object(o.a)("p",null,"Each row of a CSV file represents a single entry that should be imported into\nthe database.  Both nodes and relationships can be imported into the database\nusing CSV files."),Object(o.a)("p",null,"Each set of CSV files must have a header that describes the data that is stored\nin the CSV files.  Each field in the CSV header is in the format\n",Object(o.a)("inlineCode",{parentName:"p"},"<name>[:<type>]")," which identifies the name that should be used for that column\nand the type that should be used for that column.  The type is optional and\ndefaults to ",Object(o.a)("inlineCode",{parentName:"p"},"string")," (see the following chapter)."),Object(o.a)("p",null,"Each CSV field must be divided using the delimiter (",Object(o.a)("inlineCode",{parentName:"p"},"--delimiter")," flag) and\neach CSV field can either be quoted or unquoted.  When the field is quoted, the\nfirst and last character in the field ",Object(o.a)("em",{parentName:"p"},"must")," be the quote character (",Object(o.a)("inlineCode",{parentName:"p"},"--quote"),"\nflag).  If the field isn't quoted, and a quote character appears in it, it is\ntreated as a regular character.  If a quote character appears inside a quoted\nstring then the quote character must be doubled in order to escape it.  Line\nfeeds and carriage returns are ignored in the CSV file, also, the file can't\ncontain a NULL character."),Object(o.a)("p",null,"The CSV parser uses the same logic as the standard Python CSV parser.  The data\nis parsed in the same way as the following snippet:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, strict=True):\n    # process 'row'\n")),Object(o.a)("p",null,"Python uses 'excel' as the default dialect when parsing CSV files and the\ndefault settings for the CSV parser are:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"delimiter: ",Object(o.a)("inlineCode",{parentName:"li"},"','")),Object(o.a)("li",{parentName:"ul"},"doublequote: ",Object(o.a)("inlineCode",{parentName:"li"},"True")),Object(o.a)("li",{parentName:"ul"},"escapechar: ",Object(o.a)("inlineCode",{parentName:"li"},"None")),Object(o.a)("li",{parentName:"ul"},"lineterminator: ",Object(o.a)("inlineCode",{parentName:"li"},"'\\r\\n'")),Object(o.a)("li",{parentName:"ul"},"quotechar: ",Object(o.a)("inlineCode",{parentName:"li"},"'\"'")),Object(o.a)("li",{parentName:"ul"},"skipinitialspace: ",Object(o.a)("inlineCode",{parentName:"li"},"False"))),Object(o.a)("p",null,"The above snippet can be expanded to:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-python"},"import csv\nfor row in csv.reader(stream, delimiter=',', doublequote=True,\n                      escapechar=None, lineterminator='\\r\\n',\n                      quotechar='\"', skipinitialspace=False,\n                      strict=True):\n    # process 'row'\n")),Object(o.a)("p",null,"For more information about the meaning of the above values, see:\n",Object(o.a)("a",{parentName:"p",href:"https://docs.python.org/3/library/csv.html#csv.Dialect"},"https://docs.python.org/3/library/csv.html#csv.Dialect")),Object(o.a)("h5",{id:"properties"},"Properties"),Object(o.a)("p",null,"Both nodes and relationships can have properties added to them.  When importing\nproperties, the CSV importer uses the name specified in the header of the\ncorresponding CSV column for the name of the property.  A property is\ndesignated by specifying one of the following types in the header:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"integer"),", ",Object(o.a)("inlineCode",{parentName:"li"},"int"),", ",Object(o.a)("inlineCode",{parentName:"li"},"long"),", ",Object(o.a)("inlineCode",{parentName:"li"},"byte"),", ",Object(o.a)("inlineCode",{parentName:"li"},"short"),": creates an integer property"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"float"),", ",Object(o.a)("inlineCode",{parentName:"li"},"double"),": creates a float property"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"boolean"),", ",Object(o.a)("inlineCode",{parentName:"li"},"bool"),": creates a boolean property"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"string"),", ",Object(o.a)("inlineCode",{parentName:"li"},"char"),": creates a string property")),Object(o.a)("p",null,"When importing a boolean value, the CSV field should contain exactly the text\n",Object(o.a)("inlineCode",{parentName:"p"},"true")," to import a ",Object(o.a)("inlineCode",{parentName:"p"},"True")," boolean value.  All other text values are treated as\na boolean value ",Object(o.a)("inlineCode",{parentName:"p"},"False"),"."),Object(o.a)("p",null,"If you want to import an array of values, you can do so by appending ",Object(o.a)("inlineCode",{parentName:"p"},"[]")," to\nany of the above types.  The values of the array are then determined by\nsplitting the raw CSV value using the array delimiter (",Object(o.a)("inlineCode",{parentName:"p"},"--array-delimiter"),"\nflag) character."),Object(o.a)("p",null,"Assuming that the array delimiter is ",Object(o.a)("inlineCode",{parentName:"p"},";"),", the following example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"first_name,last_name:string,number:integer,aliases:string[]\nJohn,Doe,1,Johnny;Jo;J-man\nMelissa,Doe,2,Mel\n")),Object(o.a)("p",null,"Will yield these results:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},'CREATE ({first_name: "John", last_name: "Doe", number: 1, aliases: ["Johnny", "Jo", "J-man"]});\nCREATE ({first_name: "Melissa", last_name: "Doe", number: 2, aliases: ["Mel"]});\n')),Object(o.a)("h5",{id:"nodes"},"Nodes"),Object(o.a)("p",null,"When importing nodes, several more types can be specified in the header of the\nCSV file (along with all property types):"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"ID"),": id of the node that should be used as the node ID when importing relationships"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"LABEL"),": designates that the field contains additional labels for the node"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"ID")," field type sets the internal ID that will be used for the node when\ncreating relationships.  It is optional and nodes that don't have an ID value\nspecified will be imported, but can't be connected to any relationships.  If\nyou want to save the ID value as a property in the database, just specify a\nname for the ID (",Object(o.a)("inlineCode",{parentName:"p"},"user_id:ID"),").  If you just want to use the ID during the\nimport, leave out the name of the field (",Object(o.a)("inlineCode",{parentName:"p"},":ID"),").  The ",Object(o.a)("inlineCode",{parentName:"p"},"ID")," field also supports\ncreating separate ID spaces.  The ID space is specified with the ID space name\nappended to the ",Object(o.a)("inlineCode",{parentName:"p"},"ID")," type in parentheses (",Object(o.a)("inlineCode",{parentName:"p"},"ID(user)"),").  That allows you to have\nthe same IDs (by value) for multiple different node files (for example, numbers\nfrom 1 to N).  The IDs in each ID space will be treated as an independent set\nof IDs that don't interfere with IDs in another ID space."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"LABEL")," field type adds additional labels to the node.  The value is\ntreated as an array type so that multiple additional labels can be specified\nfor each node.  The value is split using the array delimiter\n(",Object(o.a)("inlineCode",{parentName:"p"},"--array-delimiter")," flag)."),Object(o.a)("h5",{id:"relationships"},"Relationships"),Object(o.a)("p",null,"In order to be able to import relationships, you must import the nodes in the\nsame invocation of ",Object(o.a)("inlineCode",{parentName:"p"},"mg_import_csv")," that is used to import the relationships."),Object(o.a)("p",null,"When importing relationships, several more types can be specified in the header\nof the CSV file (along with all property types):"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"START_ID"),": id of the start node that should be connected with the relationship"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"END_ID"),": id of the end node that should be connected with the relationship"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"TYPE"),": designates the type of the relationship"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"IGNORE"),": designates that the field should be ignored")),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"START_ID")," field type sets the start node that should be connected with the\nrelationship to the end node.  The field ",Object(o.a)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The\nname of this field is ignored.  If the node ID is in an ID space, you can\nspecify the ID space for the in the same way as for the node ID\n(",Object(o.a)("inlineCode",{parentName:"p"},"START_ID(user)"),")."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"END_ID")," field type sets the end node that should be connected with the\nrelationship to the start node.  The field ",Object(o.a)("em",{parentName:"p"},"must")," be specified and the node ID\nmust be one of the node IDs that were specified in the node CSV files.  The\nname of this field is ignored.  If the node ID is in an ID space, you can\nspecify the ID space for the in the same way as for the node ID\n(",Object(o.a)("inlineCode",{parentName:"p"},"END_ID(user)"),")."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"TYPE")," field type sets the type of the relationship.  Each relationship\n",Object(o.a)("em",{parentName:"p"},"must")," have a relationship type, but it doesn't necessarily need to be\nspecified in the CSV file, it can also be set externally for the whole CSV\nfile.  The name of this field is ignored."),Object(o.a)("h4",{id:"csv-importer-flags"},"CSV Importer Flags"),Object(o.a)("p",null,"The importer has many command line options that allow you to customize the way\nthe importer loads your data."),Object(o.a)("p",null,"The two main flags that are used to specify the input CSV files are ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes"),"\nand ",Object(o.a)("inlineCode",{parentName:"p"},"--relationships"),"."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes")," flag is used to specify CSV files that contain the nodes to the\nimporter.  Multiple files can be specified in each supplied ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes")," flag.\nFiles that are supplied in one ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes")," flag are treated by the CSV parser as\none big CSV file.  Only the first line of the first file is parsed for the CSV\nheader, all other files (and rows) are treated as data.  This is useful when\nyou have a very large CSV file and don't want to edit its first line just to\nadd a CSV header.  Instead, you can specify the header in a separate file (e.g.\n",Object(o.a)("inlineCode",{parentName:"p"},"users_header.csv"),") and have the data intact in the large file (e.g.\n",Object(o.a)("inlineCode",{parentName:"p"},"users.csv"),").  Also, you can supply additional labels for each set of node\nfiles.  The format of this flag is:\n",Object(o.a)("inlineCode",{parentName:"p"},"[<label>[:<label>]...=]<file>[,<file>][,<file>]..."),".  Take note that only the\n",Object(o.a)("inlineCode",{parentName:"p"},"<file>")," part is mandatory, all other parts of the flag value are optional.\nMultiple ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes")," flags can be supplied to describe multiple sets of different\nnode files.  For the importer to work, at least one ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes")," flag must be\nsupplied."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--relationships")," flag is used to specify CSV files that contain the\nrelationships to the importer.  Multiple files can be specified in each\nsupplied ",Object(o.a)("inlineCode",{parentName:"p"},"--relationships")," flag.  Files that are supplied in one\n",Object(o.a)("inlineCode",{parentName:"p"},"--relationships")," flag are treated by the CSV parser as one big CSV file.  Only\nthe first line of the first file is parsed for the CSV header, all other files\n(and rows) are treated as data.  This is useful when you have a very large CSV\nfile and don't want to edit its first line just to add a CSV header.  Instead,\nyou can specify the header in a separate file (e.g. ",Object(o.a)("inlineCode",{parentName:"p"},"friendships_header.csv"),")\nand have the data intact in the large file (e.g. ",Object(o.a)("inlineCode",{parentName:"p"},"friendships.csv"),").  Also, you\ncan set the type of all relationships in the files for each set of\nrelationships files.  The format of this flag is:\n",Object(o.a)("inlineCode",{parentName:"p"},"[<type>=]<file>[,<file>][,<file>]..."),".  Take note that only the ",Object(o.a)("inlineCode",{parentName:"p"},"<file>")," part\nis mandatory, all other parts of the flag value are optional.  Multiple\n",Object(o.a)("inlineCode",{parentName:"p"},"--relationships")," flags can be supplied to describe multiple sets of different\nrelationship files.  The ",Object(o.a)("inlineCode",{parentName:"p"},"--relationships")," flag isn't mandatory."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--delimiter")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},","),") sets the delimiter that should be used\nwhen splitting the CSV fields."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--quote")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},'"'),") sets the quote character that should be used\nto quote a CSV field."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--array-delimiter")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},";"),") sets the delimiter that should be\nused when splitting array values."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--id-type")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},"STRING"),") specifies which data type should be\nused to store the supplied node IDs when storing them as properties (if the\nfield name is supplied).  The supported values are either ",Object(o.a)("inlineCode",{parentName:"p"},"STRING")," or\n",Object(o.a)("inlineCode",{parentName:"p"},"INTEGER"),"."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--ignore-empty-strings")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},"false"),") tells the importer to treat\nall empty strings as ",Object(o.a)("inlineCode",{parentName:"p"},"Null")," values instead of an empty string value."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--ignore-extra-columns")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all columns (instead of raising an error) that aren't specified after\nthe last specified column in the CSV header."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--skip-bad-relationships")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all relationships (instead of raising an error) that refer to nodes that\ndon't exist in the node files."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--skip-duplicate-nodes")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},"false"),") tells the importer to\nignore all duplicate nodes (instead of raising an error).  Duplicate nodes are\nnodes that have an ID that is the same as another node that was already\nimported."),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"--trim-strings")," flag (default ",Object(o.a)("inlineCode",{parentName:"p"},"false"),") tells the importer to trim all of\nthe loaded CSV field values before processing them further.  Trimming the\nfields removes all leading and trailing whitespace from them."),Object(o.a)("h4",{id:"how-to-use-the-csv-import-tool"},"How to Use the CSV Import Tool?"),Object(o.a)("p",null,"The import tool is run from the console, using the ",Object(o.a)("inlineCode",{parentName:"p"},"mg_import_csv")," command.\nThe tool should be run as user ",Object(o.a)("inlineCode",{parentName:"p"},"memgraph"),", using the following command:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},"sudo -u memgraph mg_import_csv\n")),Object(o.a)("p",null,"If you installed Memgraph using Docker, you will need to run the importer\nusing the following command:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph\n")),Object(o.a)("p",null,"You can pass CSV files containing node data using the ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes")," option.\nMultiple files can be specified by repeating the ",Object(o.a)("inlineCode",{parentName:"p"},"--nodes")," option.  At least\none node file should be specified. Similarly, graph edges (also known as\nrelationships) are passed via the ",Object(o.a)("inlineCode",{parentName:"p"},"--relationships")," option.  Multiple\nrelationship files are imported by repeating the option. Unlike nodes,\nrelationships are not required."),Object(o.a)("p",null,"Internally, the CSV import tool creates a database snapshot from the CSV files.\nBy default, the tool will search for the installed Memgraph configuration and\nwill store the snapshot inside its configured data directory using the\nconfigured properties on edges setting. If the configuration isn't found, you\nwill need to use the ",Object(o.a)("inlineCode",{parentName:"p"},"--data-directory")," option to specify the data directory\nand ",Object(o.a)("inlineCode",{parentName:"p"},"--storage-properties-on-edges")," to specify whether properties on edges are\nenabled. Naturally, you can use the same options to override the default\nbehavior. Memgraph will recover the imported data on the next startup by\nlooking in the data directory. For more details on Memgraph's durability and\ndata recovery features, please check out the appropriate\n",Object(o.a)("a",{parentName:"p",href:"/docs/memgraph/concepts/storage"},"article"),"."),Object(o.a)("p",null,"It is also important to note that importing CSV data using the ",Object(o.a)("inlineCode",{parentName:"p"},"mg_import_csv"),"\ncommand should be a one-time operation before running Memgraph. In other\nwords, this tool should not be used to import data into an already running\nMemgraph instance."),Object(o.a)("p",null,"For information on other options, run:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --help\n")),Object(o.a)("p",null,"When using Docker, this translates to:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph --help\n")),Object(o.a)("h4",{id:"example"},"Example"),Object(o.a)("p",null,"Let's import a simple dataset."),Object(o.a)("p",null,"Store the following in ",Object(o.a)("inlineCode",{parentName:"p"},"comment_nodes.csv"),"."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-csv"},"id:ID(COMMENT_ID),country:string,browser:string,content:string,:LABEL\n0,Croatia,Chrome,yes,Message;Comment\n1,United Kingdom,Chrome,thanks,Message;Comment\n2,Germany,,LOL,Message;Comment\n3,France,Firefox,I see,Message;Comment\n4,Italy,Internet Explorer,fine,Message;Comment\n")),Object(o.a)("p",null,"Now, let's add ",Object(o.a)("inlineCode",{parentName:"p"},"forum_nodes.csv"),"."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-csv"},"id:ID(FORUM_ID),title:string,:LABEL\n0,General,Forum\n1,Support,Forum\n2,Music,Forum\n3,Film,Forum\n4,Programming,Forum\n")),Object(o.a)("p",null,"And finally, set relationships between comments and forums in\n",Object(o.a)("inlineCode",{parentName:"p"},"relationships.csv"),"."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-csv"},":START_ID(COMMENT_ID),:END_ID(FORUM_ID),:TYPE\n0,0,POSTED_ON\n1,1,POSTED_ON\n2,2,POSTED_ON\n3,3,POSTED_ON\n4,4,POSTED_ON\n")),Object(o.a)("p",null,"Now, you can import the dataset using the CSV importer tool."),Object(o.a)("p",null,"WARNING: Your existing snapshot and WAL data will be considered obsolete, and\nMemgraph will load the new dataset."),Object(o.a)("p",null,"Use the following command:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes comment_nodes.csv --nodes forum_nodes.csv --relationships relationships.csv\n")),Object(o.a)("p",null,"If using Docker, things are a bit more complicated. First you need to copy the\nCSV files where the Docker image can see them:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp comment_nodes.csv mg_import_helper:/import-data\ndocker cp forum_nodes.csv mg_import_helper:/import-data\ndocker cp relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),Object(o.a)("p",null,"Then, run the importer with the following:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/comment_nodes.csv --nodes /import-data/forum_nodes.csv \\\n  --relationships /import-data/relationships.csv\n")),Object(o.a)("p",null,"Next time you run Memgraph, the dataset will be loaded."),Object(o.a)("h3",{id:"importing-cypher-queries"},"Importing Cypher Queries"),Object(o.a)("p",null,"When Memgraph is running, cypher queries are imported by running ",Object(o.a)("inlineCode",{parentName:"p"},"mg_client")," in\nnon-interactive mode. The user can import queries saved in e.g. ",Object(o.a)("inlineCode",{parentName:"p"},"queries.txt"),"\nby issuing the following shell command:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"mg_client --use-ssl=False < queries.txt\n")),Object(o.a)("p",null,"If you installed Memgraph using Docker, you will need to run the client using\nthe following command:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mg_client memgraph --host HOST --use-ssl=False < queries.txt\n")),Object(o.a)("p",null,"Remember to replace ",Object(o.a)("inlineCode",{parentName:"p"},"HOST")," with valid IP of the container (see\n",Object(o.a)("a",{parentName:"p",href:"/docs/memgraph/getting-started/installation/docker-installation#note-for-docker-users"},"Note for Docker users"),")."),Object(o.a)("p",null,"For more information about ",Object(o.a)("inlineCode",{parentName:"p"},"mg_client")," options run:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"mg_client --help\n")))}c.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,u=m["".concat(r,".").concat(h)]||m[h]||d[h]||o;return a?i.a.createElement(u,l(l({ref:t},p),{},{components:a})):i.a.createElement(u,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);