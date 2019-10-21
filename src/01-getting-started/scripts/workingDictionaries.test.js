import {jsDictionaries} from "./workingDictionaries.js";

test('check province loop up', () => {
    expect(jsDictionaries.provinceLookup('AB')).toEqual('Alberta');
    expect(jsDictionaries.provinceLookup('yt')).toEqual('Yukon');
});
