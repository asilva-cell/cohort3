import {jsDictionaries} from "./workingDictionaries.js";

test('check if input is a string', () => {
    expect(jsDictionaries.isString("a")).toEqual(true);
    expect(jsDictionaries.isString(1)).toEqual(undefined);
});

test('check province loop up', () => {
    expect(jsDictionaries.provinceLookup('AB')).toEqual('Alberta');
    expect(jsDictionaries.provinceLookup('yt')).toEqual('Yukon');
    expect(jsDictionaries.provinceLookup('dc')).toEqual('Yukon')
});
