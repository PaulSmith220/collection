var collection = function () {
    this.List = [];
    this.Count = function () { return this.List.length; };
    this.Clear = function () { this.List = []; return this; };
    this.Remove = function (n) { this.List = this.List.remove(n); return this; }
    this.RemoveById = function (Id, token) {
        token = token || 'Id';
        for (var i = 0, n = this.Count() ; i < n; i++) {
            if (this.List[i][token] == Id) {
                this.List = this.List.remove(i);
                return true;
            }
        }
        return false;
    }
    this.Add = function (s) { this.List.push(s); return this; }
    this.AddList = function (list) {
        this.List = this.List.concat(list);
        return this;
    }
    this.Get = function (n) { return this.List[n]; }
    this.GetById = function (Id, token) {
        token = token || 'Id';
        for (var i = 0, n = this.Count() ; i < n; i++) {
            if (this.List[i][token] == Id) {
                return this.List[i];
            }
        }
        return false;
    }
    this.Map = function (a) {
        for (var i = 0, n = this.Count() ; i < n; i++) {
            a(this.List[i]);
        }
        return this;
    }
    this.getMax = function (s) {
        var m = 0;
        for (var i = 0, n = this.Count() ; i < n; i++) {
            if (this.List[i][s] > m) {
                m = this.List[i][s];
            }
        }
        return m;
    }
    this.SetById = function (id, option, val, token) {
        for (var i = 0, n = this.Count(); i < n; i++) {
            if (this.List[i][token] == id){
                this.List[i][option] = val;
            }
        }
    }
    this.SwapById = function (id_1, id_2, opt, token) {
        var tmp = this.GetById(id_1, token)[opt];
        this.SetById(id_1, opt, this.GetById(id_2, token)[opt], token);
        this.SetById(id_2, opt, tmp, token);
        return this;
    }
    this.MoveUp = function (id, opt, token) {
        opt = opt || false;
        for (var i = 0, n = this.Count() ; i < n; i++) {
            if (this.List[i][token] == id) {
                if (i > 0) {
                    this.List[i - 1][opt] = this.List[i][opt];
                    this.List[i][opt] -= 1;
                    var tmp = this.List[i-1];
                    this.List[i - 1] = this.List[i];
                    this.List[i] = tmp;
                    return this;
                }
            }
        }
    }
