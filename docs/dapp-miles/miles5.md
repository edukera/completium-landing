---
id: miles5
title: Consume Miles
sidebar_label: Consume Miles
slug: /dapp-miles/miles-use-case3
---
import DappButton from '../DappButton';
import DappFigure from '../DappFigure';
import Link from '@docusaurus/Link';

In this step, miles are consumed on the DApp user interface. Click the button below to open the DApp:

<DappButton url="https://edukera.github.io/completium-dapp-miles/" txt="open dapp"/>

## Connect to the Dapp

Connect to the DApp by clicking the "Connect" button:

<DappFigure img='miles-connect1.png' width='35%'/>

Then select the user account. If you don't have a dedicated user account, go to the <u><Link to="/docs/dapp-miles/miles-use-case1">Prerequisites</Link></u> page.

Once connected, the number of valid miles (ie. with expiration date in the future) is displayed:

<DappFigure img='miles-connect3.png' width='100%'/>

If the Thanos wallet is not installed (as a browser extension), then the "Install Thanos" button is displayed..

## Pick reward item

When the connected account has enough miles, the "Get it!" button of the reward item is enabled. Clicking this button generates the miles's consumption transaction to the smart contract.

For example, clicking the "Get it!" button on the 'Tezos phone case' item generates the transaction popup issued by the Thanos wallet.

<DappFigure img='miles-consume.png' width='70%'/>

The popup displays the transaction information in the "Operations" section:

```json
[
    {
        "kind":"transaction"
        "to":"KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86"
        "amount":0
        "mutez":true
        "parameter":{
            "entrypoint":"consume"
            "value":{
                "int":"5"
            }
        }
    }
]
```

Once the transaction is confirmed, you can verify the transaction online with the "Better Call Dev" indexer:

<DappButton url="https://better-call.dev/delphinet/KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86/operations" txt="open smart contract"/>

