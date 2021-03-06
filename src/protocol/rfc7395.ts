// ====================================================================
// RFC 7395: An Extensible Messaging and Presence Protocol (XMPP)
//      Subprotocol for WebSocket
// --------------------------------------------------------------------
// Source: https://tools.ietf.org/html/rfc7395
// ====================================================================

import { attribute, DefinitionOptions, languageAttribute } from '../jxt';

import { NS_FRAMING } from '../Namespaces';

declare module './' {
    export interface Stream {
        seeOtherURI?: string;
    }
}

const Protocol: DefinitionOptions[] = [
    {
        element: 'open',
        fields: {
            from: attribute('from'),
            id: attribute('id'),
            lang: languageAttribute(),
            to: attribute('to'),
            version: attribute('version')
        },
        namespace: NS_FRAMING,
        path: 'stream',
        type: 'open'
    },
    {
        element: 'close',
        fields: {
            seeOtherURI: attribute('see-other-uri')
        },
        namespace: NS_FRAMING,
        path: 'stream',
        type: 'close'
    }
];
export default Protocol;
