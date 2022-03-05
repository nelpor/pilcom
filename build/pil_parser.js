/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pil_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,13],$V2=[1,30],$V3=[1,18],$V4=[1,17],$V5=[1,27],$V6=[1,14],$V7=[1,23],$V8=[1,24],$V9=[1,28],$Va=[1,29],$Vb=[5,6],$Vc=[2,19],$Vd=[1,50],$Ve=[5,6,20,23,24,26,27,47,49,57],$Vf=[1,57],$Vg=[5,6,20,23,24,26,27,47,49,50,57],$Vh=[1,58],$Vi=[5,6,20,23,24,26,27,47,49,50,52,57],$Vj=[1,61],$Vk=[5,6,20,23,24,26,27,47,49,50,52,57,58],$Vl=[1,72],$Vm=[29,34],$Vn=[1,79],$Vo=[26,27],$Vp=[1,88],$Vq=[5,6,27],$Vr=[5,6,23];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"allStatments":3,"statmentList":4,"EOF":5,";":6,"statment":7,"plookupIdentity":8,"polCommitedDeclaration":9,"polConstantDeclaration":10,"namespaceDef":11,"polDef":12,"polIdentity":13,"include":14,"publicDeclaration":15,"INCLUDE":16,"STRING":17,"pol":18,"IDENTIFIER":19,"=":20,"expression":21,"puSide":22,"in":23,"[":24,"expressionList":25,"]":26,",":27,"elementType":28,"commited":29,"polNamesList":30,"public":31,"polId":32,"NUMBER":33,"constant":34,"bool":35,"u8":36,"u16":37,"u32":38,"u64":39,"s8":40,"s16":41,"s32":42,"s64":43,"field":44,"namespace":45,"e5":46,"+":47,"e4":48,"-":49,"*":50,"e3":51,"**":52,"e2":53,"e1":54,":":55,"(":56,")":57,"'":58,".":59,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:";",16:"INCLUDE",17:"STRING",18:"pol",19:"IDENTIFIER",20:"=",23:"in",24:"[",26:"]",27:",",29:"commited",31:"public",33:"NUMBER",34:"constant",35:"bool",36:"u8",37:"u16",38:"u32",39:"u64",40:"s8",41:"s16",42:"s32",43:"s64",44:"field",45:"namespace",47:"+",49:"-",50:"*",52:"**",55:":",56:"(",57:")",58:"'",59:"."},
productions_: [0,[3,2],[3,3],[4,3],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[14,2],[12,4],[13,3],[8,3],[22,4],[22,3],[22,1],[25,3],[25,1],[9,4],[9,3],[15,7],[10,4],[10,3],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[30,3],[30,1],[11,2],[21,1],[46,3],[46,3],[46,1],[48,3],[48,1],[51,3],[51,1],[53,2],[53,2],[53,1],[54,1],[54,1],[54,2],[54,3],[32,2],[32,3],[32,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

            console.log(JSON.stringify($$[$0-1], null, 1));
            this.$ = $$[$0-1];
            return this.$
        
break;
case 2:

            console.log(JSON.stringify($$[$0-2], null, 1));
            this.$ = $$[$0-2];
            return this.$
        
break;
case 3: case 20:

            $$[$0-2].push($$[$0]);
        
break;
case 4: case 21: case 38:

            this.$ = [$$[$0]];
        
break;
case 5: case 6: case 7: case 8: case 9: case 10: case 40: case 43: case 45: case 47: case 50:

            this.$ = $$[$0];
        
break;
case 11: case 12:

            this.$ = $$[$0]
        
break;
case 13:

            this.$ = {type: "INCLUDE", file: $$[$0]}
        
break;
case 14:

            this.$ = {type: "POLDEFINITION", name: $$[$0-2], expression: $$[$0]};
            setLines(this.$, _$[$0-3], _$[$0-1]);
        
break;
case 15:

            this.$ = {type: "POLIDENTITY", expression: { op: "sub", values: [$$[$0-2],$$[$0]] }};
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 16:

            this.$ = {type: "PLOOKUPIDENTITY", f: $$[$0-2].pols, t: $$[$0].pols, selF: $$[$0-2].sel, selT: $$[$0].sel};
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 17:

            this.$ = {pols:$$[$0-1], sel:  $$[$0-3]};
        
break;
case 18:

            this.$ = {pols:$$[$0-1], sel:  null};
        
break;
case 19:

            this.$ = {pols:[$$[$0]], sel:  null};
        
break;
case 22:

            this.$ = {type: "POLCOMMTEDDECLARATION", names: $$[$0], elementType: $$[$0-2]}
            setLines(this.$, _$[$0-3], _$[$0]);
        
break;
case 23:

            this.$ = {type: "POLCOMMTEDDECLARATION", names: $$[$0], elementType: "field"}
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 24:

            this.$ = {type: "PUBLICDECLARATION", name: $$[$0-5], pol: $$[$0-3], idx: $$[$0-1]}
            setLines(this.$, _$[$0-6], _$[$0-3]);
        
break;
case 25:

            this.$ = {type: "POLCONSTANTDECLARATION", names: $$[$0], elementType: $$[$0-2]}
            setLines(this.$, _$[$0-3], _$[$0-1]);
        
break;
case 26:

            this.$ = {type: "POLCONSTANTDECLARATION", names: $$[$0], elementType: "field"}
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 37:

            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 39:

            this.$ = {type: "NAMESPACE", namespace: $$[$0]}
            setLines(this.$, _$[$0-1], _$[$0]);
        
break;
case 41:

            this.$ = { op: "add", values: [$$[$0-2], $$[$0]] };
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 42:

            this.$ = { op: "sub", values: [$$[$0-2], $$[$0]] };
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 44:

            this.$ = { op: "mul", values: [$$[$0-2], $$[$0]] };
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 46:

            this.$ = { op: "pow", values: [$$[$0-2], $$[$0]] };
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 48:

            this.$ = $$[$0];
            setLines(this.$, _$[$0-1], _$[$0]);
        
break;
case 49:

            this.$ = { op: "neg", values: [$$[$0]] };
            setLines(this.$, _$[$0-1], _$[$0]);
        
break;
case 51:

            this.$ = $$[$0]
            setLines(this.$, _$[$0]);
        
break;
case 52:

            this.$ = {op: "number", value: $$[$0] }
            setLines(this.$, _$[$0]);
        
break;
case 53:

            this.$ = {op: "public", name: $$[$0] }
            setLines(this.$, _$[$0-1], _$[$0]);
        
break;
case 54:

            this.$ = $$[$0-1];
            setLines(this.$, _$[$0-2], _$[$0]);
        
break;
case 55:

            $$[$0-1].next= true;
            this.$ = $$[$0-1];
        
break;
case 56:

            this.$ = {op: "pol", next: false, namespace: $$[$0-2], name: $$[$0]}
        
break;
case 57:

            this.$ = {op: "pol", next: false, namespace: "this", name: $$[$0]}
        
break;
}
},
table: [{3:1,4:2,7:3,8:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,18:$V1,19:$V2,21:15,22:12,24:$V3,31:$V4,32:26,33:$V5,45:$V6,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},{1:[3]},{5:[1,31],6:[1,32]},o($Vb,[2,4]),o($Vb,[2,5]),o($Vb,[2,6]),o($Vb,[2,7]),o($Vb,[2,8]),o($Vb,[2,9]),o($Vb,[2,10]),o($Vb,[2,11]),o($Vb,[2,12]),{23:[1,33]},{19:[1,37],28:34,29:[1,35],34:[1,36],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],40:[1,43],41:[1,44],42:[1,45],43:[1,46],44:[1,47]},{19:[1,48]},{20:[1,49],23:$Vc,24:$Vd},{17:[1,51]},{19:[1,52]},{19:$V2,21:54,25:53,32:26,33:$V5,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},o([5,6,20,23,24,26,27,57],[2,40],{47:[1,55],49:[1,56]}),o($Ve,[2,43],{50:$Vf}),o($Vg,[2,45],{52:$Vh}),o($Vi,[2,47]),{19:$V2,32:26,33:$V5,47:$V7,49:$V8,53:59,54:25,55:$V9,56:$Va},{19:$V2,32:26,33:$V5,47:$V7,49:$V8,53:60,54:25,55:$V9,56:$Va},o($Vi,[2,50]),o($Vi,[2,51],{58:$Vj}),o($Vi,[2,52]),{19:[1,62]},{19:$V2,21:63,32:26,33:$V5,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},o($Vk,[2,57],{59:[1,64]}),{1:[2,1]},{5:[1,65],7:66,8:4,9:5,10:6,11:7,12:8,13:9,14:10,15:11,16:$V0,18:$V1,19:$V2,21:15,22:12,24:$V3,31:$V4,32:26,33:$V5,45:$V6,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},{19:$V2,21:68,22:67,24:$V3,32:26,33:$V5,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},{29:[1,69],34:[1,70]},{19:$Vl,30:71},{19:$Vl,30:73},{20:[1,74]},o($Vm,[2,27]),o($Vm,[2,28]),o($Vm,[2,29]),o($Vm,[2,30]),o($Vm,[2,31]),o($Vm,[2,32]),o($Vm,[2,33]),o($Vm,[2,34]),o($Vm,[2,35]),o($Vm,[2,36]),o($Vb,[2,39]),{19:$V2,21:75,32:26,33:$V5,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},{19:$V2,21:54,25:76,32:26,33:$V5,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},o($Vb,[2,13]),{20:[1,77]},{26:[1,78],27:$Vn},o($Vo,[2,21]),{19:$V2,32:26,33:$V5,47:$V7,48:80,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},{19:$V2,32:26,33:$V5,47:$V7,48:81,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},{19:$V2,32:26,33:$V5,47:$V7,49:$V8,51:82,53:22,54:25,55:$V9,56:$Va},{19:$V2,32:26,33:$V5,47:$V7,49:$V8,53:83,54:25,55:$V9,56:$Va},o($Vi,[2,48]),o($Vi,[2,49]),o($Vk,[2,55]),o($Vi,[2,53]),{57:[1,84]},{19:[1,85]},{1:[2,2]},o($Vb,[2,3]),o($Vb,[2,16]),o($Vb,$Vc,{24:$Vd}),{19:$Vl,30:86},{19:$Vl,30:87},o($Vb,[2,23],{27:$Vp}),o($Vq,[2,38]),o($Vb,[2,26],{27:$Vp}),{19:$V2,21:89,32:26,33:$V5,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},o($Vb,[2,15]),{26:[1,90],27:$Vn},{19:$V2,32:91},o($Vr,[2,18]),{19:$V2,21:92,32:26,33:$V5,46:19,47:$V7,48:20,49:$V8,51:21,53:22,54:25,55:$V9,56:$Va},o($Ve,[2,41],{50:$Vf}),o($Ve,[2,42],{50:$Vf}),o($Vg,[2,44],{52:$Vh}),o($Vi,[2,46]),o($Vi,[2,54]),o($Vk,[2,56]),o($Vb,[2,22],{27:$Vp}),o($Vb,[2,25],{27:$Vp}),{19:[1,93]},o($Vb,[2,14]),o($Vr,[2,17]),{24:[1,94],58:$Vj},o($Vo,[2,20]),o($Vq,[2,37]),{33:[1,95]},{26:[1,96]},o($Vb,[2,24])],
defaultActions: {31:[2,1],65:[2,2]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

const util = require('util');
function setLines(dst, first, last) {
    last = last || first;
    dst.first_line = first.first_line;
    dst.first_column = first.first_column;
    dst.last_line = last.last_line;
    dst.last_column = last.last_column;
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* skip whitespace */ 
break;
case 1: /* console.log("MULTILINE COMMENT: "+yy_.yytext); */  
break;
case 2: /* console.log("SINGLE LINE COMMENT: "+yy_.yytext); */ 
break;
case 3: yy_.yytext = yy_.yytext.replace(/\_/g, ""); return 33; 
break;
case 4: return 18; 
break;
case 5: return 29; 
break;
case 6: return 34; 
break;
case 7: return 45; 
break;
case 8: return 16; 
break;
case 9: return 23; 
break;
case 10: return 35; 
break;
case 11: return 36; 
break;
case 12: return 37; 
break;
case 13: return 38; 
break;
case 14: return 39; 
break;
case 15: return 40; 
break;
case 16: return 41; 
break;
case 17: return 42; 
break;
case 18: return 43; 
break;
case 19: return 44; 
break;
case 20: return 31; 
break;
case 21: yy_.yytext = yy_.yytext.slice(1,-1); return 17; 
break;
case 22: return 19; 
break;
case 23: return 52; 
break;
case 24: return 47; 
break;
case 25: return 49; 
break;
case 26: return 50; 
break;
case 27: return "'"; 
break;
case 28: return 6; 
break;
case 29: return 27; 
break;
case 30: return 59; 
break;
case 31: return 20; 
break;
case 32: return 56; 
break;
case 33: return 57; 
break;
case 34: return 24; 
break;
case 35: return 26; 
break;
case 36: return 55; 
break;
case 37: return 5; 
break;
case 38: console.log("INVALID: " + yy_.yytext); return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)/,/^(?:\/\/.*)/,/^(?:(0x[0-9A-Fa-f][0-9A-Fa-f_]*)|([0-9][0-9_]*))/,/^(?:pol(?=[^a-zA-Z$_0-9]))/,/^(?:commited(?=[^a-zA-Z$_0-9]))/,/^(?:constant(?=[^a-zA-Z$_0-9]))/,/^(?:namespace(?=[^a-zA-Z$_0-9]))/,/^(?:include(?=[^a-zA-Z$_0-9]))/,/^(?:in(?=[^a-zA-Z$_0-9]))/,/^(?:bool(?=[^a-zA-Z$_0-9]))/,/^(?:u8(?=[^a-zA-Z$_0-9]))/,/^(?:u16(?=[^a-zA-Z$_0-9]))/,/^(?:u32(?=[^a-zA-Z$_0-9]))/,/^(?:u64(?=[^a-zA-Z$_0-9]))/,/^(?:s8(?=[^a-zA-Z$_0-9]))/,/^(?:s16(?=[^a-zA-Z$_0-9]))/,/^(?:s32(?=[^a-zA-Z$_0-9]))/,/^(?:s64(?=[^a-zA-Z$_0-9]))/,/^(?:field(?=[^a-zA-Z$_0-9]))/,/^(?:public(?=[^a-zA-Z$_0-9]))/,/^(?:"[^"]+")/,/^(?:[a-zA-Z_][a-zA-Z$_0-9]*)/,/^(?:\*\*)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:')/,/^(?:;)/,/^(?:,)/,/^(?:\.)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?::)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pil_parser;
exports.Parser = pil_parser.Parser;
exports.parse = function () { return pil_parser.parse.apply(pil_parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}