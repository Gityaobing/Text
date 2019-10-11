QUnit.test('Testing sectionSelector default', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {});

    assert.equal($(id).find(SECTION_SEL).length, $(id).find('.section').length, 'We expect sectonSelector to be .section by default');
});

QUnit.test('Testing slidesSelector default', function(assert) {
    var id = '#fullpage';
    var FP = initFullpageNew(id, {});

    assert.equal($(id).find(SLIDE_SEL).length, $(id).find('.slide').length, 'We expect slideSelector to be .slide by default');
});


QUnit.test('Testing a custom sectionSelector ', function(assert) {
    var id = '#fullpage-custom-selector';
    var customSelector = '.custom-section-selector';
    var FP = initFullpageNew(id, {sectionSelector: customSelector});

    assert.equal($(id).find(SECTION_SEL).length, $(id).find(customSelector).length, 'We expect sections to use a custom selector');
});

QUnit.test('Testing a custom slideSelector', function(assert) {
    var id = '#fullpage-custom-slide-selector';
    var customSelector = '.custom-slide-selector';
    var FP = initFullpageNew(id, {slideSelector: customSelector});

    assert.equal($(id).find(SLIDE_SEL).length, $(id).find(customSelector).length, 'We expect slides to use a custom selector');
});

