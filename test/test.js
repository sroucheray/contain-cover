import QUnit from "quint";
import ObjectFit from "object-fit";
import { contain, cover } from "object-fit";

QUnit.test( "Export", function( assert ) {
    assert.equal( typeof ObjectFit.contain, "function" );
    assert.equal( typeof ObjectFit.cover, "function" );

    assert.equal( typeof contain, "function" );
    assert.equal( typeof cover, "function" );
});

QUnit.module("Same size");
QUnit.test( "Contain", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 100;
    let height = 200;

    let result = contain(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 100 );
    assert.equal( result.height, 200 );
    assert.equal( result.x, 0 );
    assert.equal( result.y, 0 );
});
QUnit.test( "cover", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 100;
    let height = 200;

    let result = cover(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 100 );
    assert.equal( result.height, 200 );
    assert.equal( result.x, 0 );
    assert.equal( result.y, 0 );
});


QUnit.module("Wider object");
QUnit.test( "Contain", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 200;
    let height = 200;

    let result = contain(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 100 );
    assert.equal( result.height, 100 );
    assert.equal( result.x, 0 );
    assert.equal( result.y, 50 );
});
QUnit.test( "Cover", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 200;
    let height = 200;

    let result = cover(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 200 );
    assert.equal( result.height, 200 );
    assert.equal( result.x, -50 );
    assert.equal( result.y, 0 );
});

QUnit.module("Higher object");
QUnit.test( "Contain", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 100;
    let height = 400;

    let result = contain(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 50 );
    assert.equal( result.height, 200 );
    assert.equal( result.x, 25 );
    assert.equal( result.y, 0 );
});
QUnit.test( "Cover", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 100;
    let height = 400;

    let result = cover(containerWidth, containerHeight, width, height);
    console.log(result)
    assert.equal( result.width, 100 );
    assert.equal( result.height, 400 );
    assert.equal( result.x, 0 );
    assert.equal( result.y, -100 );
});

QUnit.module("Less high object");
QUnit.test( "Contain", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 100;
    let height = 100;

    let result = contain(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 100 );
    assert.equal( result.height, 100 );
    assert.equal( result.x, 0 );
    assert.equal( result.y, 50 );
});
QUnit.test( "Cover", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 100;
    let height = 100;

    let result = cover(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 200 );
    assert.equal( result.height, 200 );
    assert.equal( result.x, -50 );
    assert.equal( result.y, 0 );
});

QUnit.module("Narrower object");
QUnit.test( "Contain", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 50;
    let height = 200;

    let result = contain(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 50 );
    assert.equal( result.height, 200 );
    assert.equal( result.x, 25 );
    assert.equal( result.y, 0 );
});
QUnit.test( "Cover", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 50;
    let height = 200;

    let result = cover(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 100 );
    assert.equal( result.height, 400 );
    assert.equal( result.x, 0 );
    assert.equal( result.y, -100 );
});

QUnit.module("Smaller object");
QUnit.test( "Contain", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 50;
    let height = 50;

    let result = contain(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 100 );
    assert.equal( result.height, 100 );
    assert.equal( result.x, 0 );
    assert.equal( result.y, 50 );
});
QUnit.test( "Cover", function( assert ) {
    let containerWidth = 100;
    let containerHeight = 200;
    let width = 50;
    let height = 50;

    let result = cover(containerWidth, containerHeight, width, height);
    assert.equal( result.width, 200 );
    assert.equal( result.height, 200 );
    assert.equal( result.x, -50 );
    assert.equal( result.y, 0 );
});


QUnit.config.autostart = true;
QUnit.load();
