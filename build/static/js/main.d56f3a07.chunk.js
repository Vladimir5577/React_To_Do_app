(this.webpackJsonpto_do_exercise=this.webpackJsonpto_do_exercise||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(7),i=o.n(r),c=(o(14),o(5)),l=o(1),d=o(2),s=o(3),u=o(4);o(15);var p={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},m=function(){return a.a.createElement("header",{style:p},a.a.createElement("h1",null,"To Do List"))},f=o(8),h=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(f.a)({},e.target.name,e.target.value))},t}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo.....",style:{flex:"10px",padding:"8px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit"}))}}]),o}(n.Component),b=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"3px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t.markComplete=function(e){console.log(t.props)},t}return Object(d.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",o,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"x")))}}]),o}(n.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},g=b,y=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(g,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(n.Component),k=function(t){Object(u.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Dinner with wife",completed:!1},{id:3,title:"Meeting with boss",completed:!1}]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var o={id:Math.random(),title:e,completed:!1};t.setState({todos:[].concat(Object(c.a)(t.state.todos),[o])})},t}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement(h,{addTodo:this.addTodo}),a.a.createElement(y,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo}))}}]),o}(n.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root"))},9:function(t,e,o){t.exports=o(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d56f3a07.chunk.js.map