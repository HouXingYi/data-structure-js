
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
//二叉搜索树
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(key) {
        const newNode = new Node(key)
        const insertNode = (node, newNode) => {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        if (!this.root) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }
    //中序遍历
    inOrderTraverse(callback) {
        const inOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback)
                callback(node.key)
                inOrderTraverseNode(node.right, callback)
            }
        }
        inOrderTraverseNode(this.root, callback)
    }
    //先序遍历
    preOrderTraverse(callback) {
        const preOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                callback(node.key)
                preOrderTraverseNode(node.left, callback)
                preOrderTraverseNode(node.right, callback)
            }
        }
        preOrderTraverseNode(this.root, callback)
    }
    //后序遍历
    postOrderTraverse(callback) {
        const postOrderTraverseNode = (node, callback) => {
            if (node !== null) {
                postOrderTraverseNode(node.left, callback)
                postOrderTraverseNode(node.right, callback)
                callback(node.key)
            }
        }
        postOrderTraverseNode(this.root, callback)
    }

    //搜索树中的值

    // 最小值
    // 最大值
    // 搜索特定的值
    

}


module.exports = BinarySearchTree






