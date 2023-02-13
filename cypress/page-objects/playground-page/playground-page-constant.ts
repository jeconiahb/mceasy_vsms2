export class PlaygroundPageConstant {
    readonly testOne = 'testOne';

    testTwo = Object.freeze({
        oneNumber: 1,
        twoString: 'two',
        threeBoolean: false,
    });

    extraCheckbox = Object.freeze({
        babySeat: 'baby',
        wheelchairAccess: 'wheelchair',
        stockTip: 'tip',
    });
}
