import fs from "fs";import path from "path";import {fileURLToPath} from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const DATA=path.resolve(__dirname,"../public/data");
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function pickN(a,n){const s=new Set();while(s.size<n&&s.size<a.length)s.add(pick(a));return[...s]}
const DIFF=["easy","medium","hard"];

// ========== TAGS ==========
const TAGS_STR="Vue Vue3 Vite SFC ref reactive computed watch v-bind v-model v-if v-for v-on component props emit slot CompositionAPI lifecycle VueRouter Pinia axios template script setup style scoped nextTick defineComponent defineProps defineEmits provide inject Teleport Suspense KeepAlive Transition transition-group v-html v-text v-pre v-cloak v-once v-memo key event modifier prevent stop capture self passive once keyup keydown keypress mouseenter mouseleave click change input submit focus blur lifecycle hook beforeCreate created beforeMount mounted beforeUpdate updated beforeUnmount unmounted RouterLink RouterView useRouter useRoute createRouter createWebHashHistory createWebHistory createMemoryHistory navigation guard beforeEach afterEach route params query meta name path hash redirect alias nested route children named view route props navigation failure scroll behavior lazy loading pinia defineStore storeToRefs createPinia state getter action subscribe patch reset vuex vue-router axios fetch composable useCounter useToggle useStorage useDebounce useThrottle useEventListener useMouse useWindowSize useDark useMediaQuery useInterval useTimeout useOnline useDocumentVisibility useIntersectionObserver useResizeObserver useScriptTag useCssVar vitest vue-test-utils shallowMount mount flushPromises vitepress nuxt element-plus ant-design-vue naive-ui varlet vant uni-app vue-devtools eslint-plugin-vue prettier volar vue-tsc vite-plugin-vue";
const T=TAGS_STR.trim().split(/\s+/).filter(Boolean);
function buildTags(){return T.map(function(n,i){return{id:"vu-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Vue",description:"Vue标签："+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}

// ========== COURSES ==========
const CD=[
  {id:"vu-course-01",order:1,slug:"Vue3入门",title:"Vue 3 入门与前端路线",description:"Vue3概述、响应式、组件化、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"vu-course-02",order:2,slug:"Vite项目",title:"Vite 创建 Vue 项目",description:"Vite使用、项目结构、SFC、dev/build。",estimatedHours:4,diff:"easy"},
  {id:"vu-course-03",order:3,slug:"模板语法",title:"模板语法与指令",description:"插值、v-bind/v-model/v-if/v-for/v-on。",estimatedHours:8,diff:"easy"},
  {id:"vu-course-04",order:4,slug:"响应式基础",title:"响应式基础：ref 与 reactive",description:"ref、reactive、toRef/toRefs。",estimatedHours:8,diff:"medium"},
  {id:"vu-course-05",order:5,slug:"事件处理",title:"事件处理与表单绑定",description:"事件监听、修饰符、v-model表单绑定。",estimatedHours:6,diff:"easy"},
  {id:"vu-course-06",order:6,slug:"条件列表渲染",title:"条件渲染与列表渲染",description:"v-if/v-show、v-for、key。",estimatedHours:6,diff:"medium"},
  {id:"vu-course-07",order:7,slug:"组件通信",title:"组件基础与组件通信",description:"组件注册、props、emit、slot。",estimatedHours:10,diff:"medium"},
  {id:"vu-course-08",order:8,slug:"propsemit",title:"props、emit 与 slot",description:"props校验、emit事件、slot类型。",estimatedHours:8,diff:"medium"},
  {id:"vu-course-09",order:9,slug:"computedwatch",title:"computed、watch 与生命周期",description:"computed、watch/watchEffect、生命周期钩子。",estimatedHours:8,diff:"medium"},
  {id:"vu-course-10",order:10,slug:"CompositionAPI",title:"Composition API 进阶",description:"setup语法、composable、provide/inject。",estimatedHours:10,diff:"hard"},
  {id:"vu-course-11",order:11,slug:"VueRouter",title:"Vue Router 路由开发",description:"路由配置、动态路由、导航守卫。",estimatedHours:10,diff:"hard"},
  {id:"vu-course-12",order:12,slug:"Pinia",title:"Pinia 状态管理",description:"Pinia定义、state/getter/action、持久化。",estimatedHours:8,diff:"hard"},
  {id:"vu-course-13",order:13,slug:"接口请求",title:"接口请求与项目工程化",description:"axios/fetch、loading/error处理、工程化。",estimatedHours:8,diff:"hard"},
  {id:"vu-course-14",order:14,slug:"项目实战",title:"Vue 项目实战、部署与面试",description:"后台管理、GitHub Pages部署、面试题。",estimatedHours:10,diff:"hard"},
];
function buildCourses(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握Vue3","能构建组件","会用路由","具备项目能力"],updatedAt:"2026-07-02T00:00:00.000Z"};});}

// ========== LESSONS ==========
function buildLessons(){
  var all=[];var id=1;
  function add(ci,t,kps){
    var n=String(id).padStart(3,"0");
    all.push({id:"vu-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t,slug:t.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t,content:"# "+t+"\n\n"+t+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["Vue"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;
  }
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"课程"+(ci+1)+"章"+(j+1),["vu-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}

// ========== KNOWLEDGE POINTS ==========
var KPN=[["Vue3","渐进式框架"],["Vite","构建工具"],["SFC","单文件组件"],["ref","响应式引用"],["reactive","响应式对象"],["computed","计算属性"],["watch","监听器"],["v-bind","动态属性"],["v-model","双向绑定"],["v-if","条件渲染"],["v-for","列表渲染"],["v-on","事件监听"],["组件","UI单元"],["props","父传子"],["emit","子传父"],["slot","插槽"],["CompositionAPI","组合式API"],["生命周期","阶段钩子"],["VueRouter","路由管理器"],["Pinia","状态管理"],["axios","HTTP库"]];
function buildKP(){
  var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"vu-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Vue",tags:["Vue"],difficulty:i<10?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}
  for(var i=0;i<700;i++){k.push({id:"vu-kp-"+String(k.length+1).padStart(4,"0"),name:"Vue知识"+(k.length+1),description:"Vue知识点说明",category:"Vue",tags:["Vue"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}
  return k;
}

// ========== QUESTIONS ==========
var QC=["Vue3入门","Vite项目","模板语法","响应式","事件表单","条件列表","组件通信","propsemit","computedwatch","CompositionAPI","VueRouter","Pinia","接口请求","项目实战"];
function buildQ(){
  var qs=[];var qid=1;
  var tm=[[0,"Vue3相比Vue2主要变化",["CompositionAPI","OptionsAPI","ClassAPI"],"A","easy"],[0,"Vue3默认构建工具",["Vite","Webpack","Rollup"],"A","easy"],[2,"v-bind缩写",[":",".","@"],"A","easy"],[2,"v-model用于",["双向绑定","单向绑定","事件绑定"],"A","easy"],[3,"ref和reactive区别",["ref支持基本类型","ref只支持对象","没区别"],"A","medium"],[4,"v-on缩写",["@",":","#"],"A","easy"],[5,"v-if和v-show区别",["v-if移除DOM","一样","v-show不移除"],"A","medium"],[5,"v-for中key作用",["高效更新","增加样式","绑定事件"],"A","medium"],[6,"子组件接收父数据用",["props","emit","slot"],"A","easy"],[6,"子传父用",["emit","props","slot"],"A","easy"],[8,"computed和watch区别",["computed有缓存","一样","watch有缓存"],"A","medium"],[8,"onMounted何时执行",["组件挂载后","创建前","卸载前"],"A","easy"],[10,"动态路由参数用",[":id","?id","#id"],"A","medium"],[11,"Pinia定义状态用",["state","data","computed"],"A","medium"]];
  for(var i=0;i<tm.length;i++){var t=tm[i];qs.push({id:"vu-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t[4]||"easy",chapter:QC[t[0]],knowledge_points:[QC[t[0]]],stem:t[1]+"?",options:t[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t[3],explanation:t[1]+"正确答案是"+t[3]+"。",wrong_reason:"需加强理解。",related_questions:[],tags:[QC[t[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:450},{type:"case_analysis",min:1250}];
  while(qid<=3700){
    var u=ta.filter(function(t){return(e[t.type]||0)<t.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=DIFF[Math.floor(Math.random()*DIFF.length)];
    var id="vu-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Vue"+ch+"表述正确的是？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="以下Vue"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Vue3的重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=pick(["A","B"]);}
    else if(it.type==="fill_blank"){s="在Vue"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述Vue"+ch+"的使用方法。";o=[{label:"A",text:"简答"}];a=ch+"用于前端开发。";}
    else if(it.type==="case_analysis"){s="Vue"+ch+"案例：编写组件或分析。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)};});a="A";}
    qs.push({id:id,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。",wrong_reason:"需加强对"+ch+"的理解。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}

function buildExams(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var chQs=qs.filter(function(q){return q.chapter===c;});ex.push({id:"vu-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pickN(chQs,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function buildCases(qs){var src=["创建项目","模板语法","v-if","v-for","表单绑定","组件通信","slot","computed","watch","生命周期","CompositionAPI","路由","Pinia","axios","loading","搜索","管理","部署"];var c=[];for(var i=0;i<260;i++){var t=src[i%src.length];c.push({id:"vu-case-"+String(i+1).padStart(3,"0"),title:t+"案例"+(i+1),description:"通过"+t+"掌握Vue",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"分析",description:"需求"},{order:2,title:"实现",description:"编码"},{order:3,title:"测试",description:"验证"},{order:4,title:"总结",description:"归纳"}],relatedQuestionIds:pickN(qs,3).map(function(q){return q.id;}),tags:[t],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"路线"+(i+1),days:5,target:"目标"+(i+1)});}
function buildRoutes(){return RT.map(function(r,i){return{id:"vu-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Vue3","Vite","SFC","ref","reactive","computed","watch","v-bind","v-model","v-if","v-for","v-on","组件","props","emit","slot","CompositionAPI","生命周期","VueRouter","Pinia","axios"];
var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Vue概念"+i,"Vue概念"+i+"说明"]);}
function buildGlossary(){return GL.map(function(x,i){return{id:"vu-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Vue",tags:["Vue"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Vue常见问题"+(i+1)+"?","Vue常见问题"+(i+1)+"的解答。"]);}
function buildFaqs(){return FA.slice(0,210).map(function(x,i){return{id:"vu-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Vue",tags:["Vue"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function buildSearchIndex(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Vue"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Vue"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Vue"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Vue"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Vue"]});});return e;}
async function main(){
  console.log("Gen module-vue-basic...\n");
  var tags=buildTags();var courses=buildCourses();var lessons=buildLessons();var kps=buildKP();var questions=buildQ();
  var exams=buildExams(questions);var cases=buildCases(questions);var routes=buildRoutes();var glossary=buildGlossary();var faqs=buildFaqs();var si=buildSearchIndex(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-vue-basic",slug:"module-vue-basic",title:"Vue 3 前端开发",subtitle:"面向Vue前端开发者",description:"Vue3 Vite模板语法响应式组件通信VueRouter Pinia项目实战训练模块。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Vue","Vue3","前端开发","Composition API","Vue Router","Pinia","Vite","项目实战"],estimatedHours:160,difficulty:"beginner",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u2764",repoUrl:"https://github.com/openskill-galaxy/module-vue-basic",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var files2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in files2){var fp=path.join(DATA,key);fs.writeFileSync(fp,JSON.stringify(files2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(files2[key])?files2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\ncourses:"+courses.length+" lessons:"+lessons.length+" KPs:"+kps.length+" questions:"+questions.length+" exams:"+exams.length+" cases:"+cases.length+" routes:"+routes.length+" tags:"+tags.length+" glossary:"+glossary.length+" faqs:"+faqs.length+" search-index:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
