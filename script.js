"use strict";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";

// SDK detects identifier from URL and uses default custom UI size
const sdk = await new AppExtensionsSDK().initialize();

// Pass in id manually and provide custom UI size
// const sdk = await new AppExtensionsSDK({ identifier: "123abc" }).initialize({
//     size: { height: 500 },
// });
console.log(AppExtensionsSDK);
