---
id: miles10
title: Interface
sidebar_label: Interface
slug: /dapp-miles/miles-contract-interface
---

import Link from '@docusaurus/Link';

The smart contract is developed with the <Link to="/docs/dapp-tools/archetype">Archetype</Link> language.
## Storage

The contract defines an admin address that only can call the `add` and `clear_expired` entry points:

```archetype
variable admin : role = @tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw
```

The contract defines a <Link to="/docs/dapp-tools/archetype#collection">collection</Link> of miles:

```archetype
asset mile identified by id {
   id         : string;
   amount     : nat;
   expiration : date
}
```

The contract defines a collection of owners and defines which owner owns which miles:

```archetype
asset owner identified by addr {
  addr  : role;
  miles : partition<mile> = []
}
```

## Entry points

### add

```archetype
entry add (
          ow                 : address,
          newmile_id         : string,
          newmile_amount     : nat,
          newmile_expiration : date) {
  called by admin
  effect { ... }
}
```
### consume

```archetype
entry consume (quantity : nat) {
  ...
}
```

### clear expired

```archetype
entry clear_expired () {
  called by admin
  effect {
    ...
  }
}
```