class Matrix {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this.matrix = []
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = []
            for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    is_square() {
        if (this.rows == this.columns) return true;
        else return false;
    }

    fill_random_int(start, end) {
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = []
            for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j] = floor(random(start, end));
            }
        }
    }
    fill_random(start, end) {
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = []
            for (let j = 0; j < this.columns; j++) {
                this.matrix[i][j] = random(start, end);
            }
        }
    }

    add(other) {
        if (this.rows != other.rows || this.columns != other.columns) {
            console.error("Rows and colums must be same for additio!!!, Stop being idiot");
            return;
        }
        let ans = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                ans.matrix[i][j] = this.matrix[i][j] + other.matrix[i][j];
            }
        }
        return ans;
    }

    multiply(value) {

        let ans = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                ans.matrix[i][j] = this.matrix[i][j] * value;
            }
        }
        return ans;
    }

    sub(other) {
        if (this.rows != other.rows || this.columns != other.columns) {
            console.error("Rows and colums must be same for additio!!!, Stop being idiot");
            return;
        }
        let ans = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                ans.matrix[i][j] = this.matrix[i][j] - other.matrix[i][j];
            }
        }
        return ans;
    }

    hadamard_product(other) {
        if (this.rows != other.rows || this.columns != other.columns) {
            console.error("Rows and colums must be same for additio!!!, Stop being idiot");
            return;
        }
        let ans = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                ans.matrix[i][j] = this.matrix[i][j] * other.matrix[i][j];
            }
        }
        return ans;
    }

    transpose() {
        let ans = new Matrix(this.columns, this.rows);
        for (let i = 0; i < this.columns; i++) {
            ans.matrix[i] = []
            for (let j = 0; j < this.rows; j++) {
                ans.matrix[i][j] = this.matrix[j][i];
            }
        }
        return ans;
    }

    dot(post) {
        if (this.columns != post.rows) {
            console.error("Itna peete he ku ho be, Dekh to lo ki multiply ho bhe sakte hai ki nahi!!!");
            return;
        }

        let ans = new Matrix(this.rows, post.columns);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < post.columns; j++) {
                for (let k = 0; k < this.columns; k++) {
                    ans.matrix[i][j] += this.matrix[i][k] * post.matrix[k][j];
                }
            }
        }
        return ans;
    }

    get T() {
        let ans = new Matrix(this.columns, this.rows);
        for (let i = 0; i < this.columns; i++) {
            ans.matrix[i] = []
            for (let j = 0; j < this.rows; j++) {
                ans.matrix[i][j] = this.matrix[j][i];
            }
        }
        return ans;
    }

    get I() {
        if (!this.is_square()) console.error("Quuuuu, qu karte ho inta nasha!!, Sirf Square matrix ko identity matrix bana sakte hai");
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.rows; j++) {
                if (i == j) this.matrix[i][j] = 1;
            }
        }
    }

    static one_d_list_to_matrix(list) {
        let ans = new Matrix(1, list.length);
        for (let i = 0; i < list.length; i++) {
            ans.matrix[0][i] = list[i];
        }
        return ans;
    }

    static two_d_list_to_matrix(list) {
        let rows = list.length;
        let cols = list[0].length;
        let ans = new Matrix(rows, cols);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                ans.matrix[i][j] = list[i][j];
            }
        }
        return ans;
    }

    sigmoid() {
        let ans = new Matrix(this.rows, this.columns);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                ans.matrix[i][j] = 1 / (1 + Math.pow(Math.E, -1 * this.matrix[i][j]));
            }
        }
        return ans;
    }

}