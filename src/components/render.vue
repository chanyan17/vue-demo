<script>
export default {
    name: 'render',
    props: {
        level: Number,
        required: true,
        default: 1
    },
    render: function(createElement) {
        // 创建 kebabCase 风格的ID
        var headingId = this.getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^\-|\-$)/g, '')

        return createElement(
            'h' + this.level,
            [
                createElement(
                    'a', //tag name 标签名称
                    {
                        attrs: {
                            name: headingId,
                            href: '#' + headingId
                        }
                    }, // 属性、类等等
                    this.$slots.default // 文本内容,或者继续嵌套子节点
                    /*[
                        createElement(
                            'div',
                            Array.apply(null, {length: 5}).map(function() {
                                return createElement('span', 'hi');
                            })
                        )
                    ]*/
                )
            ]
        )
    },
    methods: {
        getChildrenTextContent: function (children) {
            return children.map(function (node) {
                return node.children
                ? getChildrenTextContent(node.children)
                : node.text
            }).join('')
        }
    }
}
</script>
