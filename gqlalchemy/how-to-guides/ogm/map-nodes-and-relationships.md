---
id: map-nodes-and-relationships
title: How to map nodes and relationships
sidebar_label: Map nodes and relationships
---

This guide will teach you how to map Python classes to nodes and relationships
in a graph database. 

> Make sure you have a running Memgraph instance. If you're not sure how to run
> Memgraph, check out the Memgraph [Quick start](/memgraph/#quick-start).

First, do all necessary imports and create an instance of the database:

```python
from gqlalchemy import Memgraph, Node, Relationship, Field
from typing import Optional
```

After that, you instantiate Memgraph and create classes representing the nodes
and relationships. You are creating `User` and `Streamer` nodes, where every
`Streamer` is also a `User`, but not every `User` is a `Streamer`.

```python
db = Memgraph()

class User(Node):
    id: str = Field(index=True, exist=True, unique=True, db=db)

class Streamer(User):
    id: str = Field(index=True, exist=True, unique=True, db=db)
    username: Optional[str] = Field(index=True, exist=True, unique=True, db=db)
    url: Optional[str] = Field()
    followers: Optional[int] = Field()
    createdAt: Optional[str] = Field()
    totalViewCount: Optional[int] = Field()
    description: Optional[str] = Field()
```

`Node` is a Python class that maps to a graph object in Memgraph. `User` and
`Streamer` are classes which inherit from `Node` and they map to a label in the
graph database. Class `User` maps to a single `:User` label, while class
`Streamer` maps to multiple labels `:Streamer:User`, since it inherits from the
`User` class. If you create a node with the label `User`, that node has a
property `id`, which is indexed and a unique string. With the help of `Field()`,
you can define those constraints on the properties and define to which database
that property will be saved. Argument `index=True` is added to the property
`id`, which is both in the `User` and `Streamer` class. Because `Streamer`
inherits from `User`, the property `id` will be indexed on nodes labeled with
`User`. In the Cypher query language, that means the query `CREATE INDEX ON
:User(id);` will be executed.

In a similar way, you can create a relationship:

```python
class ChatsWith(Relationship, type="CHATS_WITH"):
    lastChatted: Optional[str] = Field()
```

Now you have created a relationship of type `CHATS_WITH`. This relationship has
the property `lastChatted`, which is optional. If you want to create a
relationship without any properties, you can do that with:

```python
class ChatsWith(Relationship, type="CHATS_WITH"):
    pass
```

Hopefully this guide has taught you how to map nodes and relationships. If you
have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).