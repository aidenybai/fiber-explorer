# fiber explorer

Run: `pnpm i && pnpm run dev`

General explanation: https://blog.logrocket.com/deep-dive-react-fiber/

Make you own React: https://github.com/pomber/didact, https://medium.com/@sweetpalma/gooact-react-in-160-lines-of-javascript-44e0742ad60f

Amazing overview of React w/ fibers: https://pomb.us/build-your-own-react/

## Anatomy of a fiber

Read this: https://medium.com/@aliWhosane/react-fiber-data-structure-demystified-d3794470a8a4#:~:text=The%20fiber%20nodes%20are%20organized,children%20in%20the%20component%20tree.

Raw non-circular JSON for counter example:

```js
{
  "tag": 0,
  "key": null,
  "stateNode": null,
  "return": {
    "tag": 5,
    "key": null,
    "elementType": "div",
    "type": "div",
    "stateNode": {
      "__reactProps$8bl8a91ccj": {
        "children": {
          "key": null,
          "ref": null,
          "props": { "init": 0 },
          "_owner": {
            "tag": 0,
            "key": null,
            "stateNode": null,
            "return": {
              "tag": 3,
              "key": null,
              "elementType": null,
              "type": null,
              "stateNode": {
                "tag": 1,
                "containerInfo": {
                  "__reactContainer$8bl8a91ccj": {
                    "tag": 3,
                    "key": null,
                    "elementType": null,
                    "type": null,
                    "return": null,
                    "child": null,
                    "sibling": null,
                    "index": 0,
                    "ref": null,
                    "pendingProps": null,
                    "memoizedProps": null,
                    "updateQueue": {
                      "baseState": {
                        "element": null,
                        "isDehydrated": false,
                        "cache": null,
                        "transitions": null,
                        "pendingSuspenseBoundaries": null
                      },
                      "firstBaseUpdate": {
                        "eventTime": 344.1999999284744,
                        "lane": 16,
                        "tag": 0,
                        "payload": {
                          "element": {
                            "key": null,
                            "ref": null,
                            "props": {},
                            "_owner": null,
                            "_store": {}
                          }
                        },
                        "callback": null,
                        "next": null
                      },
                      "lastBaseUpdate": {
                        "eventTime": 344.1999999284744,
                        "lane": 16,
                        "tag": 0,
                        "payload": {
                          "element": {
                            "key": null,
                            "ref": null,
                            "props": {},
                            "_owner": null,
                            "_store": {}
                          }
                        },
                        "callback": null,
                        "next": null
                      },
                      "shared": {
                        "pending": null,
                        "interleaved": null,
                        "lanes": 0
                      },
                      "effects": null
                    },
                    "memoizedState": {
                      "element": null,
                      "isDehydrated": false,
                      "cache": null,
                      "transitions": null,
                      "pendingSuspenseBoundaries": null
                    },
                    "dependencies": null,
                    "mode": 3,
                    "flags": 0,
                    "subtreeFlags": 0,
                    "deletions": null,
                    "lanes": 16,
                    "childLanes": 0,
                    "actualDuration": 0,
                    "actualStartTime": -1,
                    "selfBaseDuration": 0,
                    "treeBaseDuration": 0,
                    "_debugSource": null,
                    "_debugOwner": null,
                    "_debugNeedsRemount": false,
                    "_debugHookTypes": null
                  },
                  "_reactListeningythhyax6jk": true
                },
                "pendingChildren": null,
                "pingCache": null,
                "finishedWork": null,
                "timeoutHandle": -1,
                "context": {},
                "pendingContext": null,
                "callbackNode": null,
                "callbackPriority": 0,
                "eventTimes": [
                  0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                "expirationTimes": [
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
                ],
                "pendingLanes": 0,
                "suspendedLanes": 0,
                "pingedLanes": 0,
                "expiredLanes": 0,
                "mutableReadLanes": 0,
                "finishedLanes": 0,
                "entangledLanes": 0,
                "entanglements": [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                "identifierPrefix": "",
                "mutableSourceEagerHydrationData": null,
                "effectDuration": 0,
                "passiveEffectDuration": 0,
                "memoizedUpdaters": {},
                "pendingUpdatersLaneMap": [
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {}
                ],
                "_debugRootType": "createRoot()"
              },
              "return": null,
              "sibling": null,
              "index": 0,
              "ref": null,
              "pendingProps": null,
              "memoizedProps": null,
              "updateQueue": {
                "baseState": {
                  "element": {
                    "key": null,
                    "ref": null,
                    "props": {},
                    "_owner": null,
                    "_store": {}
                  },
                  "isDehydrated": false,
                  "cache": null,
                  "transitions": null,
                  "pendingSuspenseBoundaries": null
                },
                "firstBaseUpdate": null,
                "lastBaseUpdate": null,
                "shared": { "pending": null, "interleaved": null, "lanes": 0 },
                "effects": null
              },
              "memoizedState": {
                "element": {
                  "key": null,
                  "ref": null,
                  "props": {},
                  "_owner": null,
                  "_store": {}
                },
                "isDehydrated": false,
                "cache": null,
                "transitions": null,
                "pendingSuspenseBoundaries": null
              },
              "dependencies": null,
              "mode": 3,
              "flags": 1024,
              "subtreeFlags": 3,
              "deletions": null,
              "lanes": 0,
              "childLanes": 0,
              "actualDuration": 0.8000000715255737,
              "actualStartTime": 346.2999999523163,
              "selfBaseDuration": 0.10000002384185791,
              "treeBaseDuration": 0.5,
              "_debugSource": null,
              "_debugOwner": null,
              "_debugNeedsRemount": false,
              "_debugHookTypes": null
            },
            "sibling": null,
            "index": 0,
            "ref": null,
            "pendingProps": {},
            "memoizedProps": {},
            "updateQueue": null,
            "memoizedState": {
              "memoizedState": {},
              "baseState": null,
              "baseQueue": null,
              "queue": null,
              "next": {
                "baseQueue": null,
                "queue": { "pending": null, "interleaved": null, "lanes": 0 },
                "next": null
              }
            },
            "dependencies": null,
            "mode": 3,
            "flags": 1,
            "subtreeFlags": 1,
            "deletions": null,
            "lanes": 0,
            "childLanes": 0,
            "alternate": null,
            "actualDuration": 0.6000000238418579,
            "actualStartTime": 346.39999997615814,
            "selfBaseDuration": 0.2999999523162842,
            "treeBaseDuration": 0.3999999761581421,
            "_debugSource": {
              "fileName": "/Users/aidenybai/Projects/aidenybai/fiber-explorer/app.jsx",
              "lineNumber": 26,
              "columnNumber": 52
            },
            "_debugOwner": null,
            "_debugNeedsRemount": false,
            "_debugHookTypes": ["useRef", "useState"]
          },
          "_store": {}
        }
      }
    },
    "sibling": null,
    "index": 0,
    "ref": null,
    "updateQueue": null,
    "memoizedState": null,
    "dependencies": null,
    "mode": 3,
    "flags": 0,
    "subtreeFlags": 1,
    "deletions": null,
    "lanes": 0,
    "childLanes": 0,
    "alternate": null,
    "actualDuration": 0.30000007152557373,
    "actualStartTime": 346.6999999284744,
    "selfBaseDuration": 0,
    "treeBaseDuration": 0.10000002384185791,
    "_debugSource": {
      "fileName": "/Users/aidenybai/Projects/aidenybai/fiber-explorer/app.jsx",
      "lineNumber": 20,
      "columnNumber": 5
    },
    "_debugNeedsRemount": false,
    "_debugHookTypes": null
  },
  "child": {
    "tag": 5,
    "key": null,
    "elementType": "button",
    "type": "button",
    "stateNode": { "__reactProps$8bl8a91ccj": { "children": 0 } },
    "child": null,
    "sibling": null,
    "index": 0,
    "ref": null,
    "pendingProps": { "children": 0 },
    "memoizedProps": { "children": 0 },
    "updateQueue": null,
    "memoizedState": null,
    "dependencies": null,
    "mode": 3,
    "flags": 0,
    "subtreeFlags": 0,
    "deletions": null,
    "lanes": 0,
    "childLanes": 0,
    "alternate": null,
    "actualDuration": 0.20000004768371582,
    "actualStartTime": 346.7999999523163,
    "selfBaseDuration": 0,
    "treeBaseDuration": 0,
    "_debugSource": {
      "fileName": "/Users/aidenybai/Projects/aidenybai/fiber-explorer/app.jsx",
      "lineNumber": 11,
      "columnNumber": 10
    },
    "_debugNeedsRemount": false,
    "_debugHookTypes": null
  },
  "sibling": null,
  "index": 0,
  "ref": null,
  "pendingProps": { "init": 0 },
  "memoizedProps": { "init": 0 },
  "updateQueue": null,
  "memoizedState": {
    "memoizedState": 0,
    "baseState": 0,
    "baseQueue": null,
    "queue": {
      "pending": null,
      "interleaved": null,
      "lanes": 0,
      "lastRenderedState": 0
    },
    "next": {
      "memoizedState": {},
      "baseState": null,
      "baseQueue": null,
      "queue": null,
      "next": {
        "baseQueue": null,
        "queue": { "pending": null, "interleaved": null, "lanes": 0 },
        "next": null
      }
    }
  },
  "dependencies": null,
  "mode": 3,
  "flags": 1,
  "subtreeFlags": 0,
  "deletions": null,
  "lanes": 0,
  "childLanes": 0,
  "alternate": null,
  "actualDuration": 0.30000007152557373,
  "actualStartTime": 346.6999999284744,
  "selfBaseDuration": 0.10000002384185791,
  "treeBaseDuration": 0.10000002384185791,
  "_debugSource": {
    "fileName": "/Users/aidenybai/Projects/aidenybai/fiber-explorer/app.jsx",
    "lineNumber": 21,
    "columnNumber": 7
  },
  "_debugNeedsRemount": false,
  "_debugHookTypes": ["useState", "useRef", "useState"]
}


```
