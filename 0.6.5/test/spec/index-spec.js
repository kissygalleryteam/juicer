KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('juicer-gallery', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/juicer-gallery/1.0/']});