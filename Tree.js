function CreateNode(data){
    return{
        data:data,
        left:null,
        right:null
    }
}

function Queue(){
    return{
      items:[],
        enqueue(element){
            this.items.push(element);
        },
        dequeue(){
            return this.items.shift();
        }
    }
  }

function Tree(){

    const toFindDuplicates= arr => arr.filter((item,index) => arr.indexOf(item) === index);

    const compareNumbers = (a,b) => a-b;

    const rmDuplicatesAndSort = arr => {
        const nonDuplicates = toFindDuplicates(arr);
        const sorted = nonDuplicates.sort(compareNumbers);
        return sorted;
    }

    const buildBST = (arr,start,end) => {
        if (start > end) return null;
        let mid = parseInt((start + end) / 2);
        let node= CreateNode(arr[mid]);
        node.left = buildBST(arr,start,mid-1);
        node.right = buildBST(arr,mid+1,end);
        return node;
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      }

      const readingNodes= node => {
        console.log(node.data);
      }

    return{
        root:null,
        readingNodes,

        buildTree(rawArr){
            const arr = rmDuplicatesAndSort(rawArr);
            this.root=buildBST(arr,0,arr.length - 1);
        },

        prettyPrint(node=this.root, prefix = "", isLeft = true){
            if (node === null) {
              return;
            }
            if (node.right !== null) {
              prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
            }
            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
            if (node.left !== null) {
              prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
            }
        },

        insert(value){
            let current = this.root;
            let node = CreateNode(value);
            if(!this.root){
                this.root = node;
                return;
            }
            while(current){
                if(value === current.data) return;
                if(value > current.data){
                    if(current.right === null){
                        current.right = node;
                        return;
                    }
                    current = current.right;   
                } 
                if(value < current.data){
                    if(current.left === null){
                        current.left = node;
                        return;
                    }
                    current = current.left;
                    
                }
            }
        },

        minValue(root){
            let minv = root.data;
            while(root.left !== null){
                minv = root.left.data;
                root=root.left;
            }
            return minv;
        },

        deleteNode(root,value){
            if(root === null) return root;
            if(value < root.data) root.left = this.deleteNode(root.left,value);
            else if(value > root.data) root.right = this.deleteNode(root.right,value);
            else{
                if(root.left === null) return root.right;
                else if(root.right === null) return root.left;
                root.data=this.minValue(root.right);
                root.right=this.deleteNode(root.right,root.data);
            } 
            return root;
        },

        find(value){
            let current=this.root;
            let counter=0;
            while(current){
                if (value > current.data){
                    current = current.right;
                    counter++;
                } 
                else if (value < current.data) {
                    current = current.left
                    counter++;
                }
                else if (value === current.data){
                    return {current,counter};
                } 
            }
            return;
        },

        levelOrder(fnc = null){
            if(this.root === null) return;
            let q=Queue();
            let selected=this.root;
            let dequeued;
            let arr=[];
            q.enqueue(selected);
            while(q.items.length){
            dequeued=q.dequeue();
            arr.push(dequeued.data);
            if(fnc) fnc(dequeued);
            if(dequeued.left) q.enqueue(dequeued.left);
            if(dequeued.right) q.enqueue(dequeued.right);
            }
            if(!fnc) return arr;    
        },

        preorder(node,arr){
            if(node === null) return arr;
            arr.push(node.data);
            arr=this.preorder(node.left,arr);
            arr=this.preorder(node.right,arr);
            return arr;
        },

        inorder(node,arr){
            if(node === null) return arr;
            arr=this.preorder(node.left,arr);
            arr.push(node.data);
            arr=this.preorder(node.right,arr);
            return arr;
        },

        postorder(node,arr){
            if(node === null) return arr;
            arr=this.preorder(node.left,arr);
            arr=this.preorder(node.right,arr);
            arr.push(node.data);
            return arr;
        },
        maxHeight(node){
            if (node == null) return 0;
            else
            {
                let lDepth = this.maxHeight(node.left);
                let rDepth = this.maxHeight(node.right);
                if (lDepth > rDepth) return (lDepth + 1);
                else return (rDepth + 1);
            }
            

        },
        height(value){
            let maxHeight=this.maxHeight(this.root);
            let nodeDepth=this.find(value).counter;
            return maxHeight - nodeDepth;
        },

        depth(value){
            return this.find(value).counter;

        },

        isBalanced(node=this.root){
            if (node == null) return 0;
            else
            {
                let lDepth = this.maxHeight(node.left);
                let rDepth = this.maxHeight(node.right);
                lDepth+=1;
                rDepth+=1;
                if(rDepth === lDepth) return true;
                else if((lDepth + 1 === rDepth) || (rDepth + 1 === lDepth)) return true;
                else return false;
            }
        },
        rebalance(){
            let treeArr=this.levelOrder();
            const newArr=rmDuplicatesAndSort(treeArr);
            let newTree=Tree();
            newTree.buildTree(newArr);
            this.root=newTree.root;
        }
        
    }
}

const bst=Tree();
const arr=[1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

bst.buildTree(arr);
bst.insert(21);
bst.insert(456);
bst.insert(222);
bst.insert(111);
bst.insert(110);
bst.insert(109);
bst.insert(108);
//bst.prettyPrint();
bst.rebalance();
bst.prettyPrint();