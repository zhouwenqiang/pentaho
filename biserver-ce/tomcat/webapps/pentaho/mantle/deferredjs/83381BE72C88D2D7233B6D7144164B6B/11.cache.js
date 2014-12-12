defineSeed(1, -1, CM$);
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
function $setAriaDisabledState(element, value){
  $set_0(($clinit_State() , DISABLED), element, initValues(_3Ljava_lang_Boolean_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Boolean, [($clinit_Boolean() , value?TRUE_3:FALSE_3)]));
}

function $setAriaLabelProperty(element, value){
  $set_0(($clinit_Property() , LABEL), element, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, [value]));
}

function $onBrowserEvent(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventType;
  eventType = event_0.type;
  $equals_4('keydown', eventType) && (event_0.keyCode || 0) == 13 && this$static.onEnterKeyDown(context, parent_0, value, event_0, valueUpdater);
}

function AbstractCell_0(consumedEvents){
  var event_0, event$index, event$max, events;
  events = null;
  if (consumedEvents != null && consumedEvents.length > 0) {
    events = new HashSet_0;
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $add_20(events, event_0);
    }
  }
  !!events && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet_0(events)));
}

defineSeed(111, 1, {});
_.onBrowserEvent = function onBrowserEvent(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent(this, context, parent_0, value, event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown(context, parent_0, value, event_0, valueUpdater){
}
;
_.consumedEvents = null;
function $render(data, sb){
  data != null && $render_0($render_1(dynamicCast(data, Q$String)), sb);
}

function AbstractSafeHtmlCell_0(renderer, consumedEvents){
  AbstractCell_0.call(this, consumedEvents);
  if (!renderer) {
    throw new IllegalArgumentException_1('renderer == null');
  }
}

defineSeed(112, 111, {});
_.render = function render(context, data, sb){
  $render(data, sb);
}
;
function Cell$Context_0(index, column){
  Cell$Context_1.call(this, index, column, 0);
}

function Cell$Context_1(index, column, subindex){
  this.index_0 = index;
  this.column = column;
  this.subindex = subindex;
}

defineSeed(113, 1, {}, Cell$Context_0, Cell$Context_1);
_.column = 0;
_.index_0 = 0;
_.subindex = 0;
function $render_0(value, sb){
  !!value && ($append_7(sb.sb, value.html) , sb);
}

function TextCell_0(){
  AbstractSafeHtmlCell_0.call(this, (!instance_3 && (instance_3 = new SimpleSafeHtmlRenderer_0) , instance_3), initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, []));
}

defineSeed(114, 112, {}, TextCell_0);
function $push(this$static, value){
  this$static[this$static.length] = value;
}

function $html(this$static, html){
  $html_0(this$static.delegate_0, html);
  return this$static.returnBuilder;
}

defineSeed(148, 1, {});
_.html_0 = function html_0(html){
  return $html(this, html);
}
;
_.delegate_0 = null;
_.isEndTagForbidden = false;
_.returnBuilder = null;
defineSeed(149, 1, {});
function $assertCanAddStylePropertyImpl(this$static){
  $assertStartTagOpen(this$static, 'Style properties cannot be added after appending HTML or adding a child element.');
  if (this$static.isStyleClosed) {
    throw new IllegalStateException_1('Style properties must be added at the same time. If you already added style properties, you cannot add more after adding non-style attributes.');
  }
  if (!this$static.isStyleOpen) {
    this$static.isStyleOpen = true;
    $append_7(this$static.sb, ' style="');
  }
}

function $assertEndTagNotForbidden(this$static, operation){
  if ($peek_0(this$static.stack).builder.isEndTagForbidden) {
    throw new UnsupportedOperationException_1($peek_0(this$static.stack).tagName_0 + ' does not support ' + operation);
  }
}

function $assertStartTagOpen(this$static, message){
  if (!this$static.isStartTagOpen) {
    throw new IllegalStateException_1(message);
  }
}

function $assertValidTagName(tagName){
  if (!$test(HTML_TAG_REGEX, tagName)) {
    throw new IllegalArgumentException_1('The specified tag name is invalid: ' + tagName);
  }
}

function $end(this$static){
  $endImpl(this$static, $peek_0(this$static.stack).tagName_0);
}

function $end_0(this$static, tagName){
  var topItem;
  topItem = $peek_0(this$static.stack).tagName_0;
  if (!$equalsIgnoreCase(topItem, tagName)) {
    throw new IllegalStateException_1('Specified tag "' + tagName + '" does not match the current element "' + topItem + '"');
  }
  $endImpl(this$static, topItem);
}

function $endAllTags(this$static){
  while (this$static.stack.top_0) {
    $endImpl(this$static, $peek_0(this$static.stack).tagName_0);
  }
}

function $endImpl(this$static, tagName){
  $maybeCloseStartTag(this$static);
  $peek_0(this$static.stack).builder.isEndTagForbidden?$append_7(this$static.sb, ' />'):$append_7($append_7($append_7(this$static.sb, '<\/'), tagName), '>');
  this$static.isStartTagOpen = false;
  this$static.isStyleClosed = true;
  $pop(this$static.stack);
  this$static.isHtmlOrTextAdded = false;
}

function $endStyle(this$static){
  if (!this$static.isStyleOpen) {
    throw new IllegalStateException_1("Attempting to close a style attribute, but the style attribute isn't open");
  }
  $maybeCloseStyleAttribute(this$static);
}

function $html_0(this$static, html){
  $assertStartTagOpen(this$static, 'html cannot be set on an element that already contains other content or elements.');
  $maybeCloseStartTag(this$static);
  $assertEndTagNotForbidden(this$static, 'html');
  this$static.isHtmlOrTextAdded = true;
  $append_7(this$static.sb, html.html);
}

function $maybeCloseStartTag(this$static){
  $maybeCloseStyleAttribute(this$static);
  if (this$static.isStartTagOpen) {
    this$static.isStartTagOpen = false;
    $peek_0(this$static.stack).builder.isEndTagForbidden || $append_7(this$static.sb, '>');
  }
}

function $maybeCloseStyleAttribute(this$static){
  if (this$static.isStyleOpen) {
    this$static.isStyleOpen = false;
    this$static.isStyleClosed = true;
    $append_7(this$static.sb, '"');
  }
}

function $onStart(this$static, tagName, builder){
  if (this$static.isEmpty) {
    this$static.isEmpty = false;
  }
   else if (!this$static.stack.top_0) {
    throw new IllegalStateException_1('You can only build one top level element.');
  }
   else {
    $assertEndTagNotForbidden(this$static, 'child elements');
    if ($peek_0(this$static.stack).builder.isEndTagForbidden) {
      throw new UnsupportedOperationException_1($peek_0(this$static.stack).tagName_0 + ' does not support child elements.');
    }
  }
  if (this$static.isHtmlOrTextAdded) {
    throw new IllegalStateException_1('Cannot append an element after setting text of html.');
  }
  $assertValidTagName(tagName);
  $maybeCloseStartTag(this$static);
  $push_1(this$static.stack, builder, tagName);
  this$static.isStartTagOpen = true;
  this$static.isStyleOpen = false;
  this$static.isStyleClosed = false;
  this$static.isHtmlOrTextAdded = false;
}

defineSeed(150, 1, {});
_.isEmpty = true;
_.isHtmlOrTextAdded = false;
_.isStartTagOpen = false;
_.isStyleClosed = false;
_.isStyleOpen = false;
var HTML_TAG_REGEX = null;
function $assertNotEmpty(this$static){
  if (!this$static.top_0) {
    throw new IllegalStateException_1('There are no elements on the stack.');
  }
}

function $peek_0(this$static){
  $assertNotEmpty(this$static);
  return this$static.top_0;
}

function $pop(this$static){
  var toRet;
  $assertNotEmpty(this$static);
  toRet = this$static.top_0;
  this$static.top_0 = this$static.top_0.next;
  --this$static.size_0;
  return toRet;
}

function $push_1(this$static, builder, tagName){
  var node;
  node = new ElementBuilderImpl$StackNode_0(tagName, builder);
  node.next = this$static.top_0;
  this$static.top_0 = node;
  ++this$static.size_0;
}

function ElementBuilderImpl$FastPeekStack_0(){
}

defineSeed(151, 1, {}, ElementBuilderImpl$FastPeekStack_0);
_.size_0 = 0;
_.top_0 = null;
function ElementBuilderImpl$StackNode_0(tagName, builder){
  this.builder = builder;
  this.tagName_0 = tagName;
}

defineSeed(152, 1, {}, ElementBuilderImpl$StackNode_0);
_.builder = null;
_.next = null;
_.tagName_0 = null;
function HtmlBuilderFactory_0(){
}

defineSeed(153, 149, {}, HtmlBuilderFactory_0);
var instance_0 = null;
function $asSafeHtml(this$static){
  $endAllTags(this$static);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString_0($toString_0(this$static.sb.data_0));
}

function $attribute(this$static, name_0, value){
  $trustedAttribute(this$static, htmlEscape(name_0), value);
}

function $attribute_0(this$static, name_0, value){
  $trustedAttribute_0(this$static, htmlEscape(name_0), value);
}

function $startDiv(this$static){
  $trustedStart(this$static, 'div', this$static.divBuilder);
  return this$static.divBuilder;
}

function $startTD(this$static){
  $trustedStart(this$static, 'td', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTH(this$static){
  $trustedStart(this$static, 'th', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTR(this$static){
  $trustedStart(this$static, 'tr', this$static.tableRowBuilder);
  return this$static.tableRowBuilder;
}

function $startTableSection(this$static, tagName){
  !this$static.tableSectionBuilder && (this$static.tableSectionBuilder = new HtmlTableSectionBuilder_0(this$static));
  $trustedStart(this$static, tagName, this$static.tableSectionBuilder);
  return this$static.tableSectionBuilder;
}

function $styleProperty(this$static, style){
  $assertCanAddStylePropertyImpl(this$static);
  $append_7(this$static.sb, style.css);
  return this$static.stylesBuilder;
}

function $trustedAttribute(this$static, name_0, value){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_7($append_5($append_7($append_7($append_7(this$static.sb, ' '), name_0), '="'), value), '"');
}

function $trustedAttribute_0(this$static, name_0, value){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_7($append_7($append_7($append_7($append_7(this$static.sb, ' '), name_0), '="'), htmlEscape(value)), '"');
}

function $trustedStart(this$static, tagName, builder){
  $onStart(this$static, tagName, builder);
  $append_7($append_7(this$static.sb, '<'), tagName);
}

function HtmlBuilderImpl_0(){
  this.stack = new ElementBuilderImpl$FastPeekStack_0;
  !HTML_TAG_REGEX && (HTML_TAG_REGEX = new RegExp('^[a-z][a-z0-9]*$', 'i'));
  this.divBuilder = new HtmlDivBuilder_0(this);
  new HtmlElementBuilder_0(this);
  new HtmlInputBuilder_0(this);
  new HtmlLIBuilder_0(this);
  new HtmlOptionBuilder_0(this);
  new HtmlSpanBuilder_0(this);
  this.stylesBuilder = new HtmlStylesBuilder_0(this);
  this.tableCellBuilder = new HtmlTableCellBuilder_0(this);
  this.tableRowBuilder = new HtmlTableRowBuilder_0(this);
  this.sb = new StringBuilder_0;
}

defineSeed(154, 150, {}, HtmlBuilderImpl_0);
_.tableSectionBuilder = null;
function $attribute_1(this$static, name_0, value){
  $attribute(this$static.delegate, name_0, value);
  return this$static.returnBuilder;
}

function $className(this$static, className){
  return $trustedAttribute_0(this$static.delegate, 'class', className) , this$static.returnBuilder;
}

function HtmlElementBuilderBase_0(delegate){
  HtmlElementBuilderBase_1.call(this, delegate, false);
}

function HtmlElementBuilderBase_1(delegate, isEndTagForbidden){
  this.delegate_0 = delegate;
  this.isEndTagForbidden = isEndTagForbidden;
  this.returnBuilder = this;
  this.delegate = delegate;
}

defineSeed(156, 148, {});
_.delegate = null;
function HtmlDivBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(155, 156, {}, HtmlDivBuilder_0);
function HtmlElementBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(157, 156, {}, HtmlElementBuilder_0);
function HtmlInputBuilder_0(delegate){
  HtmlElementBuilderBase_1.call(this, delegate, true);
}

defineSeed(158, 156, {}, HtmlInputBuilder_0);
function HtmlLIBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(159, 156, {}, HtmlLIBuilder_0);
function HtmlOptionBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(160, 156, {}, HtmlOptionBuilder_0);
function HtmlSpanBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(161, 156, {}, HtmlSpanBuilder_0);
function $left(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('left:0.0px;'));
}

function $lineHeight(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('line-height:0.0px;'));
}

function $marginTop(this$static, value){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('margin-top:' + value + 'px;'));
}

function $outlineStyle(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('outline-style:none;'));
}

function $paddingLeft(this$static, value){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('padding-left:' + value + 'px;'));
}

function $paddingRight(this$static, value){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('padding-right:' + value + 'px;'));
}

function $position(this$static, value){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('position:' + value.getCssName() + ';'));
}

function $right(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('right:0.0px;'));
}

function $top(this$static){
  return $styleProperty(this$static.delegate, new SafeStylesString_0('top:50.0%;'));
}

function $trustedProperty(this$static, name_0){
  name_0 = toHyphenatedForm(name_0);
  return $styleProperty(this$static.delegate, new SafeStylesString_0(name_0 + ':1;'));
}

function HtmlStylesBuilder_0(delegate){
  this.delegate = delegate;
}

function toHyphenatedForm(name_0){
  var hyphenated, matches, word;
  if (!camelCaseWord) {
    camelCaseMap = new HtmlStylesBuilder$FastStringMapClient_0;
    camelCaseWord = new RegExp('([A-Za-z])([^A-Z]*)', 'g');
    caseWord = new RegExp('[A-Z]([^A-Z]*)');
  }
  if (name_0.indexOf('-') != -1) {
    return name_0;
  }
  hyphenated = $get_0(camelCaseMap, name_0);
  if (hyphenated == null) {
    hyphenated = '';
    while (matches = $exec(camelCaseWord, name_0)) {
      word = matches[0];
      if (!$exec(caseWord, word)) {
        hyphenated += word;
      }
       else {
        hyphenated += '-' + matches[1].toLowerCase();
        matches.length > 1 && (hyphenated += matches[2]);
      }
    }
    $put(camelCaseMap, name_0, hyphenated);
  }
  return hyphenated;
}

defineSeed(162, 1, {}, HtmlStylesBuilder_0);
_.delegate = null;
var camelCaseMap = null, camelCaseWord = null, caseWord = null;
function $get_0(this$static, key){
  return this$static.map[key] || null;
}

function $put(this$static, key, value){
  this$static.map[key] = value;
}

function HtmlStylesBuilder$FastStringMapClient_0(){
  this.map = {};
}

defineSeed(163, 1, {}, HtmlStylesBuilder$FastStringMapClient_0);
function $colSpan(this$static, colSpan){
  return $trustedAttribute(this$static.delegate, 'colSpan', colSpan) , dynamicCast(this$static.returnBuilder, Q$TableCellBuilder);
}

function HtmlTableCellBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(164, 156, makeCastMap([Q$TableCellBuilder]), HtmlTableCellBuilder_0);
function $html_1(){
  throw new UnsupportedOperationException_1('Table row elements do not support setting inner html or text. Use startTD/startTH() instead to append a table cell to the section.');
}

function HtmlTableRowBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(165, 156, {}, HtmlTableRowBuilder_0);
_.html_0 = function html_1(html){
  return $html_1();
}
;
function $html_2(){
  throw new UnsupportedOperationException_1('Table section elements do not support setting inner html or text. Use startTR() instead to append a table row to the section.');
}

function HtmlTableSectionBuilder_0(delegate){
  HtmlElementBuilderBase_0.call(this, delegate);
}

defineSeed(166, 156, {}, HtmlTableSectionBuilder_0);
_.html_0 = function html_2(html){
  return $html_2();
}
;
function $clinit_Style$OutlineStyle(){
  $clinit_Style$OutlineStyle = nullMethod;
  NONE_1 = new Style$OutlineStyle$1_0;
  DASHED_0 = new Style$OutlineStyle$2_0;
  DOTTED_0 = new Style$OutlineStyle$3_0;
  DOUBLE = new Style$OutlineStyle$4_0;
  GROOVE = new Style$OutlineStyle$5_0;
  INSET = new Style$OutlineStyle$6_0;
  OUTSET = new Style$OutlineStyle$7_0;
  RIDGE = new Style$OutlineStyle$8_0;
  SOLID_0 = new Style$OutlineStyle$9_0;
  $VALUES_4 = initValues(_3Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, makeCastMap([Q$Serializable, Q$Enum_$1, Q$Object_$1]), Q$Style$OutlineStyle, [NONE_1, DASHED_0, DOTTED_0, DOUBLE, GROOVE, INSET, OUTSET, RIDGE, SOLID_0]);
}

function values_5(){
  $clinit_Style$OutlineStyle();
  return $VALUES_4;
}

defineSeed(200, 57, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_4, DASHED_0, DOTTED_0, DOUBLE, GROOVE, INSET, NONE_1, OUTSET, RIDGE, SOLID_0;
function Style$OutlineStyle$1_0(){
  Enum_0.call(this, 'NONE', 0);
}

defineSeed(201, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$1_0);
function Style$OutlineStyle$2_0(){
  Enum_0.call(this, 'DASHED', 1);
}

defineSeed(202, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$2_0);
function Style$OutlineStyle$3_0(){
  Enum_0.call(this, 'DOTTED', 2);
}

defineSeed(203, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$3_0);
function Style$OutlineStyle$4_0(){
  Enum_0.call(this, 'DOUBLE', 3);
}

defineSeed(204, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$4_0);
function Style$OutlineStyle$5_0(){
  Enum_0.call(this, 'GROOVE', 4);
}

defineSeed(205, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$5_0);
function Style$OutlineStyle$6_0(){
  Enum_0.call(this, 'INSET', 5);
}

defineSeed(206, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$6_0);
function Style$OutlineStyle$7_0(){
  Enum_0.call(this, 'OUTSET', 6);
}

defineSeed(207, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$7_0);
function Style$OutlineStyle$8_0(){
  Enum_0.call(this, 'RIDGE', 7);
}

defineSeed(208, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$8_0);
function Style$OutlineStyle$9_0(){
  Enum_0.call(this, 'SOLID', 8);
}

defineSeed(209, 200, makeCastMap([Q$Style$HasCssName, Q$Style$OutlineStyle, Q$Serializable, Q$Comparable, Q$Enum]), Style$OutlineStyle$9_0);
defineSeed(216, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName(){
  return 'static';
}
;
defineSeed(217, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_0(){
  return 'relative';
}
;
defineSeed(218, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_1(){
  return 'absolute';
}
;
defineSeed(219, 215, makeCastMap([Q$Style$HasCssName, Q$Style$Position, Q$Serializable, Q$Comparable, Q$Enum]));
_.getCssName = function getCssName_2(){
  return 'fixed';
}
;
function $clinit_Style$TableLayout(){
  $clinit_Style$TableLayout = nullMethod;
  AUTO_0 = new Style$TableLayout$1_0;
  FIXED_0 = new Style$TableLayout$2_0;
  $VALUES_7 = initValues(_3Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, makeCastMap([Q$Serializable, Q$Enum_$1, Q$Object_$1]), Q$Style$TableLayout, [AUTO_0, FIXED_0]);
}

function values_8(){
  $clinit_Style$TableLayout();
  return $VALUES_7;
}

defineSeed(220, 57, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]));
var $VALUES_7, AUTO_0, FIXED_0;
function Style$TableLayout$1_0(){
  Enum_0.call(this, 'AUTO', 0);
}

defineSeed(221, 220, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]), Style$TableLayout$1_0);
function Style$TableLayout$2_0(){
  Enum_0.call(this, 'FIXED', 1);
}

defineSeed(222, 220, makeCastMap([Q$Style$HasCssName, Q$Style$TableLayout, Q$Serializable, Q$Comparable, Q$Enum]), Style$TableLayout$2_0);
function inject(css){
  $clinit_StyleInjector();
  $push_0(toInject, css);
  schedule_0();
}

function $setColSpan(this$static, colSpan){
  this$static.colSpan = colSpan;
}

function $addKeyHandlersTo(this$static, source){
  addHandlers(source, this$static);
}

defineSeed(278, 1, makeCastMap([Q$KeyDownHandler, Q$KeyPressHandler, Q$KeyUpHandler, Q$EventHandler]));
function $delegateEvent(target, event_0){
  !!target.handlerManager_0 && $fireEvent(target.handlerManager_0, event_0);
}

defineSeed(337, 338, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setParent = function setParent(parent_0){
  $setParent(this, parent_0);
}
;
function $after(this$static, when){
  return gt(fromDouble(this$static.jsdate.getTime()), fromDouble(when.jsdate.getTime()));
}

function $before(this$static, when){
  return lt(fromDouble(this$static.jsdate.getTime()), fromDouble(when.jsdate.getTime()));
}

function $addAll(this$static, c){
  var changed, iter;
  iter = c.iterator_0();
  changed = false;
  while (iter.hasNext()) {
    this$static.add_0(iter.next_0()) && (changed = true);
  }
  return changed;
}

function $containsAll(this$static, c){
  var iter;
  iter = c.iterator_0();
  while (iter.hasNext()) {
    if (!this$static.contains_0(iter.next_0())) {
      return false;
    }
  }
  return true;
}

function $retainAll(this$static, c){
  var changed, iter;
  iter = $iterator($keySet_0(this$static.map));
  changed = false;
  while (iter.val$outerIter.hasNext()) {
    if (!$contains_1(c, $next_6(iter))) {
      iter.val$outerIter.remove_1();
      changed = true;
    }
  }
  return changed;
}

defineSeed(447, 1, makeCastMap([Q$Collection]));
_.addAll = function addAll(c){
  return $addAll(this, c);
}
;
_.containsAll = function containsAll(c){
  return $containsAll(this, c);
}
;
function $exec(this$static, input){
  return this$static.exec(input);
}

function $appendHtmlConstant(this$static, html){
  $append_7(this$static.sb, html);
  return this$static;
}

function $render_1(object){
  return object == null?($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML):($clinit_SafeHtmlUtils() , new SafeHtmlString_0(htmlEscape(object)));
}

function SimpleSafeHtmlRenderer_0(){
}

defineSeed(481, 1, {}, SimpleSafeHtmlRenderer_0);
var instance_3 = null;
function $addCellPreviewHandler(this$static, handler){
  return $addCellPreviewHandler_0(this$static.presenter, handler);
}

function $addRangeChangeHandler(this$static, handler){
  return $addRangeChangeHandler_0(this$static.presenter, handler);
}

function $addRowCountChangeHandler(this$static, handler){
  return $addRowCountChangeHandler_0(this$static.presenter, handler);
}

function $cellConsumesEventType(cell, eventType){
  var consumedEvents;
  consumedEvents = cell.consumedEvents;
  return !!consumedEvents && consumedEvents.contains_0(eventType);
}

function $checkRowBounds_0(this$static, row){
  if (!(row >= 0 && row < $getVisibleItemCount(this$static.presenter))) {
    throw new IndexOutOfBoundsException_1('Row index: ' + row + ', Row size: ' + $getCurrentState(this$static.presenter).rowCount);
  }
}

function $getValueKey(this$static, value){
  this$static.presenter;
  return value;
}

function $setFocusable(this$static, elem, focusable){
  var rowElem;
  if (focusable) {
    rowElem = elem;
    $setTabIndex(rowElem, this$static.tabIndex_0);
  }
   else {
    elem.tabIndex = -1;
    elem.removeAttribute('tabIndex');
    elem.removeAttribute('accessKey');
  }
}

function $setKeyboardSelectionHandler(this$static, keyboardSelectionReg){
  if (this$static.keyboardSelectionReg) {
    $removeHandler(this$static.keyboardSelectionReg.real);
    this$static.keyboardSelectionReg = null;
  }
  !!keyboardSelectionReg && (this$static.keyboardSelectionReg = $addCellPreviewHandler_0(this$static.presenter, keyboardSelectionReg));
}

function $setRowCount(this$static, size, isExact){
  $setRowCount_0(this$static.presenter, size, isExact);
}

function $setSelectionModel(this$static, selectionModel){
  $setSelectionModel_0(this$static.presenter, selectionModel);
}

function $setVisibleRange(this$static, range){
  $setVisibleRange_0(this$static.presenter, range, false);
}

function $showOrHide(element, show){
  if (!element) {
    return;
  }
  show?(element.style['display'] = '' , undefined):(element.style['display'] = ($clinit_Style$Display() , 'none') , undefined);
}

function AbstractHasData_0(widget){
  var eventTypes;
  $initWidget(this, widget);
  this.presenter = new HasDataPresenter_0(this, new AbstractHasData$View_0(this));
  eventTypes = new HashSet_0;
  $add_20(eventTypes, 'focus');
  $add_20(eventTypes, 'blur');
  $add_20(eventTypes, 'keydown');
  $add_20(eventTypes, 'keyup');
  $add_20(eventTypes, 'click');
  $add_20(eventTypes, 'mousedown');
  $sinkEvents_0((!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , impl_3), this, eventTypes);
  $addCellPreviewHandler(this, new DefaultSelectionEventManager_0);
  $setKeyboardSelectionHandler(this, new AbstractHasData$DefaultKeyboardSelectionHandler_0(this));
}

defineSeed(499, 500, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]));
_.getVisibleRange = function getVisibleRange(){
  return $getVisibleRange(this.presenter);
}
;
_.onBrowserEvent_0 = function onBrowserEvent_8(event_0){
  var eventTarget, eventType, target;
  !impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0);
  if (this.isRefreshing) {
    return;
  }
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  if (!isOrHasChildImpl(this.element, eventTarget)) {
    return;
  }
  $onBrowserEvent_0(this, event_0);
  this.widget.onBrowserEvent_0(event_0);
  eventType = event_0.type;
  if ($equals_4('focus', eventType)) {
    this.isFocused = true;
    $onFocus(this);
  }
   else if ($equals_4('blur', eventType)) {
    this.isFocused = false;
    $onBlur(this);
  }
   else 
    $equals_4('keydown', eventType)?(this.isFocused = true):$equals_4('mousedown', eventType) && (!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , $isFocusable(impl_3, target)) && (this.isFocused = true);
  $onBrowserEvent2(this, event_0);
}
;
_.onUnload = function onUnload_2(){
  this.isFocused = false;
}
;
_.setFocus = function setFocus(focused){
  var elem;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this));
  !!elem && (focused?(elem.focus() , undefined):(elem.blur() , undefined));
}
;
_.setRowCount = function setRowCount(size, isExact){
  $setRowCount_0(this.presenter, size, isExact);
}
;
_.setRowData = function setRowData(start, values){
  $setRowData(this.presenter, start, values);
}
;
_.isFocused = false;
_.isRefreshing = false;
_.keyboardSelectionReg = null;
_.presenter = null;
_.tabIndex_0 = 0;
function $addColumn(this$static, col, headerString){
  $insertColumn(this$static, this$static.columns.size_0, col, new TextHeader_0(headerString));
}

function $buildRowValues(this$static, values, start, isRebuildingAllRows){
  var end, i, length_0, tableSectionBuilder, value;
  length_0 = values.size_1();
  end = start + length_0;
  $start(this$static.tableBuilder, isRebuildingAllRows);
  for (i = start; i < end; ++i) {
    value = values.get(i - start);
    $buildRow(this$static.tableBuilder, value, i);
  }
  $coalesceCellProperties(this$static);
  tableSectionBuilder = $finish_0(this$static.tableBuilder);
  return tableSectionToSafeHtml(tableSectionBuilder);
}

function $checkColumnBounds(this$static, col){
  if (col < 0 || col >= this$static.columns.size_0) {
    throw new IndexOutOfBoundsException_1('Column index is out of bounds: ' + col);
  }
}

function $coalesceCellProperties(this$static){
  var column, column$iterator;
  this$static.handlesSelection = false;
  this$static.isInteractive = false;
  for (column$iterator = $iterator_0($values(this$static.tableBuilder.idToCellMap)); column$iterator.val$outerIter.hasNext();) {
    column = dynamicCast($next_7(column$iterator), Q$HasCell);
    column.getCell();
    isColumnInteractive(column) && (this$static.isInteractive = true);
  }
}

function $createHeaders(this$static, isFooter){
  var section;
  section = isFooter?$buildFooter(this$static.footerBuilder):$buildHeader(this$static.headerBuilder);
  if (section) {
    $replaceAllRows(TABLE_IMPL, this$static, isFooter?this$static.tfoot:this$static.thead, tableSectionToSafeHtml(section));
    setVisible(isFooter?this$static.tfoot:this$static.thead, true);
  }
   else {
    setVisible(isFooter?this$static.tfoot:this$static.thead, false);
  }
}

function $fireEventToCell(this$static, event_0, eventType, parentElem, rowValue, context, column){
  var cell, cellValue, col, fieldUpdater, valueUpdater, valueUpdater_0;
  cell = column.getCell();
  if (!$cellConsumesEventType(cell, eventType)) {
    return;
  }
  cellValue = column.getValue(rowValue);
  if (instanceOf(column, Q$Column)) {
    col = dynamicCast(column, Q$Column);
    valueUpdater_0 = !col.fieldUpdater?null:new Column$1_0(rowValue);
    col.cell.onBrowserEvent(context, parentElem, col.getValue(rowValue), event_0, valueUpdater_0);
  }
   else {
    fieldUpdater = column.getFieldUpdater();
    valueUpdater = !fieldUpdater?null:new AbstractCellTable$3_0(rowValue);
    cell.onBrowserEvent(context, parentElem, cellValue, event_0, valueUpdater);
  }
  this$static.cellIsEditing = false;
}

function $getColumn(this$static, col){
  $checkColumnBounds(this$static, col);
  return dynamicCast($get_6(this$static.columns, col), Q$Column);
}

function $getFooter(this$static, index){
  return dynamicCast($get_6(this$static.footers, index), Q$Header);
}

function $getHeader(this$static, index){
  return dynamicCast($get_6(this$static.headers, index), Q$Header);
}

function $getKeyboardSelectedColumn(this$static){
  return 0 == (this$static.presenter , 1)?-1:this$static.keyboardSelectedColumn;
}

function $getKeyboardSelectedElement(td){
  var firstChild;
  if (!td) {
    return null;
  }
  if ($getCellId(td) != null) {
    return td;
  }
  firstChild = $getFirstChildElement(td);
  if (!!firstChild && td.childNodes.length == 1 && $equalsIgnoreCase('div', firstChild.tagName)) {
    return firstChild;
  }
  return td;
}

function $getKeyboardSelectedSubRow(this$static){
  return 0 == (this$static.presenter , 1)?-1:this$static.keyboardSelectedSubrow;
}

function $getKeyboardSelectedTableCellElement(this$static){
  var cellCount, colIndex, column, rowIndex, tr;
  colIndex = 0 == (this$static.presenter , 1)?-1:this$static.keyboardSelectedColumn;
  if (colIndex < 0) {
    return null;
  }
  rowIndex = $getKeyboardSelectedRow(this$static.presenter);
  if (rowIndex < 0 || rowIndex >= this$static.tbody.rows.length) {
    return null;
  }
  tr = $getSubRowElement(this$static, rowIndex + $getVisibleRange(this$static.presenter).start, this$static.keyboardSelectedSubrow);
  if (tr) {
    cellCount = tr.cells.length;
    if (cellCount > 0) {
      column = colIndex < cellCount - 1?colIndex:cellCount - 1;
      return tr.cells[column];
    }
  }
  return null;
}

function $getSubRowElement(this$static, absRow, subrow){
  var curRow, domIndex, frameEnd, frameStart, offset, relRow, rowCount, rowValueIndex, rows, subrowIndex, subrowValueIndex;
  relRow = absRow - $getVisibleRange(this$static.presenter).start;
  $checkRowBounds_0(this$static, relRow);
  rows = this$static.tbody.rows;
  rowCount = rows.length;
  if (rowCount == 0) {
    return null;
  }
  frameStart = 0;
  frameEnd = rowCount - 1;
  domIndex = relRow < frameEnd?relRow:frameEnd;
  while (domIndex >= frameStart && domIndex <= frameEnd) {
    curRow = rows[domIndex];
    rowValueIndex = $getRowValueIndex(this$static.tableBuilder, curRow);
    if (rowValueIndex == absRow) {
      subrowValueIndex = $getSubrowValueIndex(curRow);
      if (subrow != subrowValueIndex) {
        offset = subrow - subrowValueIndex;
        subrowIndex = domIndex + offset;
        if (subrowIndex >= rows.length) {
          return null;
        }
        curRow = rows[subrowIndex];
        if ($getRowValueIndex(this$static.tableBuilder, curRow) != absRow) {
          return null;
        }
      }
      return curRow;
    }
     else 
      rowValueIndex > absRow?(frameEnd = domIndex - 1):(frameStart = domIndex + 1);
    domIndex = ~~((frameStart + frameEnd) / 2);
  }
  return null;
}

function $insertColumn(this$static, beforeIndex, col, header){
  var cellEvents, consumedEvents, headerEvents;
  beforeIndex != this$static.columns.size_0 && $checkColumnBounds(this$static, beforeIndex);
  $add_12(this$static.headers, beforeIndex, header);
  $add_12(this$static.footers, beforeIndex, null);
  $add_12(this$static.columns, beforeIndex, col);
  beforeIndex <= this$static.keyboardSelectedColumn && (this$static.keyboardSelectedColumn = min_0(this$static.keyboardSelectedColumn + 1, this$static.columns.size_0 - 1));
  isColumnInteractive(col) && (this$static.keyboardSelectedColumn >= this$static.columns.size_0 || !isColumnInteractive(dynamicCast($get_6(this$static.columns, this$static.keyboardSelectedColumn), Q$HasCell))) && (this$static.keyboardSelectedColumn = beforeIndex);
  consumedEvents = new HashSet_0;
  cellEvents = col.cell.consumedEvents;
  !!cellEvents && consumedEvents.addAll(cellEvents);
  if (header) {
    headerEvents = header.cell.consumedEvents;
    !!headerEvents && consumedEvents.addAll(headerEvents);
  }
  $sinkEvents_0((!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , impl_3), this$static, consumedEvents);
  this$static.headersDirty = true;
  this$static.columnWidthsDirty = true;
  $ensurePendingState(this$static.presenter).redrawRequired = true;
}

function $onBlur(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $removeClassName(td, 'cellTableKeyboardSelectedCell');
    $setRowStyleName(tr, 'cellTableKeyboardSelectedRow', 'cellTableKeyboardSelectedRowCell', false);
  }
}

function $onBrowserEvent2(this$static, event_0){
  var absRow, cellParent, clientX, clientY, col, column, columnParent, context, cur, eventTarget, eventType, footerColumnParent, footerParent, header, headerColumnParent, headerIndex, headerParent, isHeader, isSelect, isSelectionHandled, maybeTableCell, previewEvent, relRow, rowBottom, rowHeight, rowLeft, rowRight, rowTop, rowWidth, subrow, tagName, target, targetTableCell, targetTableRow, targetTableSection, tbody, tfoot, thead, unhover, value;
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = event_0.target;
  tbody = this$static.tbody;
  tfoot = this$static.tfoot;
  thead = this$static.thead;
  targetTableSection = null;
  targetTableCell = null;
  cellParent = null;
  headerParent = null;
  headerColumnParent = null;
  footerParent = null;
  footerColumnParent = null;
  maybeTableCell = null;
  cur = target;
  $equalsIgnoreCase('td', target.tagName) && $getCellId($getFirstChildElement(target)) != null && (cur = $getFirstChildElement(target));
  while (!!cur && !targetTableSection) {
    if (cur == tbody || cur == tfoot || cur == thead) {
      targetTableSection = cur;
      if (maybeTableCell) {
        targetTableCell = maybeTableCell;
        break;
      }
    }
    tagName = cur.tagName;
    ($equalsIgnoreCase('td', tagName) || $equalsIgnoreCase('th', tagName)) && (maybeTableCell = cur);
    !cellParent && $getCellId(cur) != null && (cellParent = cur);
    !headerParent && $getElementAttribute(cur, '__gwt_header') != null && (headerParent = cur);
    !footerParent && $getElementAttribute(cur, '__gwt_header') != null && (footerParent = cur);
    !headerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (headerColumnParent = cur);
    !footerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (footerColumnParent = cur);
    cur = $getParentElement(cur);
  }
  if (!targetTableCell) {
    return;
  }
  this$static.legacyRenderRowValues && (cellParent = $getFirstChildElement(targetTableCell));
  targetTableRow = $getParentElement(targetTableCell);
  eventType = event_0.type;
  isSelect = $equals_4('click', eventType) || $equals_4('keydown', eventType) && (event_0.keyCode || 0) == 13;
  col = targetTableCell.cellIndex;
  if (targetTableSection == thead || targetTableSection == tfoot) {
    isHeader = targetTableSection == thead;
    headerParent = isHeader?headerParent:footerParent;
    columnParent = isHeader?headerColumnParent:footerColumnParent;
    if (headerParent) {
      header = isHeader?$getHeader_0(this$static.headerBuilder, headerParent):$getHeader_0(this$static.footerBuilder, footerParent);
      if (header) {
        headerIndex = isHeader?__parseAndValidateInt(targetTableRow.getAttribute('__gwt_header_row') || '', -2147483648, 2147483647):__parseAndValidateInt(targetTableRow.getAttribute('__gwt_header_row') || '', -2147483648, 2147483647);
        context = new Cell$Context_0(headerIndex, col, header);
        $cellConsumesEventType(header.cell, eventType) && $onBrowserEvent(header.cell, context, headerParent, header.text_0, event_0, header.updater);
      }
    }
    if (isSelect && !!columnParent) {
      column = isHeader?$getColumn_1(this$static.headerBuilder, columnParent):$getColumn_1(this$static.footerBuilder, columnParent);
      if (!!column && column.isSortable) {
        this$static.headersDirty = true;
        this$static.updatingSortList = true;
        $push_2(this$static.sortList, column);
        this$static.updatingSortList = false;
        fire_18(this$static, this$static.sortList);
      }
    }
  }
   else if (targetTableSection == tbody) {
    absRow = $getRowValueIndex(this$static.tableBuilder, targetTableRow);
    relRow = absRow - $getVisibleRange(this$static.presenter).start;
    subrow = $getSubrowValueIndex(targetTableRow);
    if (!this$static.skipRowHoverCheck) {
      if ($equals_4('mouseover', eventType)) {
        !!this$static.hoveringRow && isOrHasChildImpl(this$static.tbody, this$static.hoveringRow) && $setRowHover(this$static, this$static.hoveringRow, false);
        this$static.hoveringRow = targetTableRow;
        $setRowHover(this$static, this$static.hoveringRow, true);
      }
       else if ($equals_4('mouseout', eventType) && !!this$static.hoveringRow) {
        unhover = true;
        if (!this$static.skipRowHoverFloatElementCheck) {
          clientX = (event_0.clientX || 0) + $wnd.pageXOffset;
          clientY = (event_0.clientY || 0) + $wnd.pageYOffset;
          rowLeft = $getAbsoluteLeft(this$static.hoveringRow);
          rowTop = $getBoundingClientRectTop(this$static.hoveringRow) + $wnd.pageYOffset;
          rowWidth = this$static.hoveringRow.offsetWidth || 0;
          rowHeight = this$static.hoveringRow.offsetHeight || 0;
          rowBottom = rowTop + rowHeight;
          rowRight = rowLeft + rowWidth;
          unhover = clientX < rowLeft || clientX > rowRight || clientY < rowTop || clientY > rowBottom;
        }
        if (unhover) {
          $setRowHover(this$static, this$static.hoveringRow, false);
          this$static.hoveringRow = null;
        }
      }
    }
    if (!(relRow >= 0 && relRow < $getVisibleItemCount(this$static.presenter))) {
      return;
    }
    isSelectionHandled = this$static.handlesSelection || 2 == (this$static.presenter , 1);
    value = ($checkRowBounds_0(this$static, relRow) , $getVisibleItem(this$static.presenter, relRow));
    context = new Cell$Context_1(absRow, col, (this$static.presenter , subrow));
    previewEvent = fire_20(this$static, event_0, this$static, context, value, this$static.cellIsEditing, isSelectionHandled);
    if (!!cellParent && !previewEvent.isCanceled) {
      this$static.legacyRenderRowValues?(column = dynamicCast($get_6(this$static.columns, col), Q$HasCell)):(column = $getColumn_0(this$static.tableBuilder, cellParent));
      !!column && $fireEventToCell(this$static, event_0, eventType, cellParent, value, context, column);
    }
  }
}

function $onFocus(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $addClassName(td, 'cellTableKeyboardSelectedCell');
    $setRowStyleName(tr, 'cellTableKeyboardSelectedRow', 'cellTableKeyboardSelectedRowCell', true);
  }
}

function $refreshColumnWidths(this$static){
  var columnCount, i, width;
  columnCount = max_0(this$static.columns.size_0, 0);
  for (i = 0; i < columnCount; ++i) {
    $doSetColumnWidth(this$static, i, (width = null , this$static.columns.size_0 > i && (width = dynamicCast(this$static.columnWidths.get_0($get_6(this$static.columns, i)), Q$String)) , width == null && (width = dynamicCast(this$static.columnWidthsByIndex.get_0(valueOf_1(i)), Q$String)) , width));
  }
}

function $refreshHeadersAndColumnsImpl(this$static){
  var wereHeadersDirty;
  if (this$static.columnWidthsDirty) {
    this$static.columnWidthsDirty = false;
    $refreshColumnWidths_0(this$static);
  }
  wereHeadersDirty = this$static.headersDirty;
  this$static.headersDirty = false;
  (wereHeadersDirty || !this$static.headerRefreshDisabled) && $createHeaders(this$static, false);
  (wereHeadersDirty || !this$static.footerRefreshDisabled) && $createHeaders(this$static, true);
}

function $renderRowValues(this$static){
  this$static.legacyRenderRowValues = false;
  throw new UnsupportedOperationException_0;
}

function $replaceAllChildren(this$static, values, html){
  $refreshHeadersAndColumnsImpl(this$static);
  !html && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start, true));
  $replaceAllRows(TABLE_IMPL, this$static, this$static.tbody, (!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , html));
}

function $replaceChildren(this$static, values, start, html){
  $refreshHeadersAndColumnsImpl(this$static);
  !html && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start + start, false));
  $replaceChildren_0(TABLE_IMPL, this$static, this$static.tbody, (!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , html), start, values.size_0);
}

function $resetFocusOnCell(this$static){
  var col, column, elem, row, value;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static));
  if (!elem) {
    return false;
  }
  row = $getKeyboardSelectedRow(this$static.presenter);
  col = 0 == (this$static.presenter , 1)?-1:this$static.keyboardSelectedColumn;
  value = ($checkRowBounds_0(this$static, row) , $getVisibleItem(this$static.presenter, row));
  this$static.presenter;
  new Cell$Context_0(row + $getVisibleRange(this$static.presenter).start, col);
  column = $getColumn_0(this$static.tableBuilder, elem);
  if (!column) {
    return false;
  }
  column.getValue(value);
  column.getCell();
  return false;
}

function $setKeyboardSelected(this$static, index, selected, stealFocus){
  var cells, focusable, i, isKeyboardSelected, keyboardColumn, subrow, td, tr, updatedSelection;
  if (0 == (this$static.presenter , 1) || !(index >= 0 && index < $getVisibleItemCount(this$static.presenter))) {
    return;
  }
  subrow = this$static.lastKeyboardSelectedSubrow;
  if (selected) {
    subrow = this$static.keyboardSelectedSubrow;
    this$static.lastKeyboardSelectedSubrow = this$static.keyboardSelectedSubrow;
  }
  tr = $getSubRowElement(this$static, index + $getVisibleRange(this$static.presenter).start, subrow);
  if (!tr) {
    return;
  }
  updatedSelection = !selected || this$static.isFocused || stealFocus;
  $setRowStyleName(tr, 'cellTableKeyboardSelectedRow', 'cellTableKeyboardSelectedRowCell', selected);
  cells = tr.cells;
  keyboardColumn = min_0(0 == (this$static.presenter , 1)?-1:this$static.keyboardSelectedColumn, cells.length - 1);
  for (i = 0; i < cells.length; ++i) {
    td = cells[i];
    isKeyboardSelected = i == keyboardColumn;
    setStyleName(td, 'cellTableKeyboardSelectedCell', updatedSelection && selected && isKeyboardSelected);
    focusable = $getKeyboardSelectedElement(td);
    $setFocusable(this$static, focusable, selected && isKeyboardSelected);
    selected && stealFocus && !this$static.cellIsEditing && isKeyboardSelected && (!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , $resetFocus_0(new AbstractCellTable$2_0(focusable)));
  }
}

function $setKeyboardSelectedColumn(this$static, column, stealFocus){
  if (0 == (this$static.presenter , 1)) {
    return;
  }
  this$static.keyboardSelectedColumn = column;
  $setKeyboardSelectedRow(this$static, $getKeyboardSelectedRow(this$static.presenter), this$static.keyboardSelectedSubrow, stealFocus);
}

function $setKeyboardSelectedRow(this$static, row, subrow, stealFocus){
  this$static.keyboardSelectedSubrow = subrow;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setKeyboardSelectedRow_0(this$static, row, stealFocus){
  this$static.keyboardSelectedSubrow = 0;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setRowHover(this$static, tr, isHovering){
  this$static.skipRowHoverStyleUpdate || $setRowStyleName(tr, 'cellTableHoveredRow', 'cellTableHoveredRowCell', isHovering);
  new RowHoverEvent_0;
}

function $setRowStyleName(tr, rowStyle, cellStyle, add){
  var cells, i;
  setStyleName(tr, rowStyle, add);
  cells = tr.cells;
  for (i = 0; i < cells.length; ++i) {
    setStyleName(cells[i], cellStyle, add);
  }
}

function $updateColumnWidthImpl(this$static, column, width){
  var columnCount, i;
  columnCount = this$static.columns.size_0;
  for (i = 0; i < columnCount; ++i) {
    $get_6(this$static.columns, i) === column && this$static.colGroupEnabled && (width == null?($ensureTableColElement(this$static, i).style['width'] = '' , undefined):($ensureTableColElement(this$static, i).style['width'] = width , undefined));
  }
}

function AbstractCellTable_0(elem, resources){
  var eventTypes;
  AbstractHasData_0.call(this, new AbstractHasData$1_0(elem));
  this.columns = new ArrayList_0;
  this.columnWidths = new HashMap_0;
  this.columnWidthsByIndex = new HashMap_0;
  this.footers = new ArrayList_0;
  this.headers = new ArrayList_0;
  this.sortList = new ColumnSortList_0(new AbstractCellTable$1_0(this));
  this.resources = resources;
  !TABLE_IMPL && (TABLE_IMPL = new AbstractCellTable$ImplTrident_0);
  !template && (template = new AbstractCellTable_TemplateImpl_0);
  eventTypes = new HashSet_0;
  $add_20(eventTypes, 'mouseover');
  $add_20(eventTypes, 'mouseout');
  $sinkEvents_0((!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , impl_3), this, eventTypes);
  this.tableBuilder = new DefaultCellTableBuilder_0(this);
  this.headerBuilder = new DefaultHeaderOrFooterBuilder_0(this, false);
  this.footerBuilder = new DefaultHeaderOrFooterBuilder_0(this, true);
  $setKeyboardSelectionHandler(this, new AbstractCellTable$CellTableKeyboardSelectionHandler_0(this));
}

function isColumnInteractive(column){
  var consumedEvents;
  consumedEvents = column.getCell().consumedEvents;
  return !!consumedEvents && consumedEvents.coll.size_1() > 0;
}

function tableSectionToSafeHtml(section){
  var rawHtml;
  if (!section) {
    throw new IllegalArgumentException_1('Only HtmlTableSectionBuilder is supported at this time');
  }
  rawHtml = $asSafeHtml(section.delegate).html;
  rawHtml = $substring_0(rawHtml, 7, rawHtml.length - 8);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString_0(rawHtml);
}

defineSeed(498, 499, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]));
_.cellIsEditing = false;
_.columnWidthsDirty = false;
_.footerBuilder = null;
_.footerRefreshDisabled = false;
_.handlesSelection = false;
_.headerBuilder = null;
_.headerRefreshDisabled = false;
_.headersDirty = false;
_.hoveringRow = null;
_.isInteractive = false;
_.keyboardSelectedColumn = 0;
_.keyboardSelectedSubrow = 0;
_.lastKeyboardSelectedSubrow = 0;
_.legacyRenderRowValues = true;
_.resources = null;
_.skipRowHoverCheck = false;
_.skipRowHoverFloatElementCheck = false;
_.skipRowHoverStyleUpdate = false;
_.tableBuilder = null;
_.updatingSortList = false;
var TABLE_IMPL = null, template = null;
function $onModification(this$static){
  this$static.this$0.updatingSortList || $createHeaders(this$static.this$0, false);
}

function AbstractCellTable$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(501, 1, {}, AbstractCellTable$1_0);
_.this$0 = null;
function AbstractCellTable$2_0(val$focusable){
  this.val$focusable = val$focusable;
}

defineSeed(502, 1, {}, AbstractCellTable$2_0);
_.execute = function execute_7(){
  this.val$focusable.focus();
}
;
_.val$focusable = null;
function AbstractCellTable$3_0(val$rowValue){
  this.val$rowValue = val$rowValue;
}

defineSeed(503, 1, {}, AbstractCellTable$3_0);
_.update = function update(value){
  $update_1(this.val$rowValue, value);
}
;
_.val$rowValue = null;
function $onCellPreview(this$static, event_0){
  var eventType, isFocusable, nativeEvent, relRow, target, keyboardPagingPolicy, keyboardPagingPolicy_0;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals_4('keydown', eventType) && !event_0.isCellEditing) {
    switch (nativeEvent.keyCode || 0) {
      case 40:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 38:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 34:
        keyboardPagingPolicy = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy?$setKeyboardSelectedRow_1(this$static, $getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 30);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 33:
        keyboardPagingPolicy_0 = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy_0?$setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy_0 && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 30);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 36:
        $setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).start);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 35:
        $setKeyboardSelectedRow_1(this$static, $getCurrentState(this$static.display_0.presenter).rowCount - 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 32:
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
    }
  }
   else if ($equals_4('click', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start;
    target = event_0.nativeEvent.target;
    isFocusable = (!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , $isFocusable(impl_3, target));
    $setKeyboardSelectedRow_0(this$static.display_0, relRow, !isFocusable);
  }
   else if ($equals_4('focus', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start;
    if ($getKeyboardSelectedRow(this$static.display_0.presenter) != relRow) {
      $setKeyboardSelectedRow_0(this$static.display_0, event_0.context.index_0, false);
      return;
    }
  }
}

function $setKeyboardSelectedRow_1(this$static, row){
  $setKeyboardSelectedRow_0(this$static.display_0, row, true);
}

function AbstractHasData$DefaultKeyboardSelectionHandler_0(display){
  this.display_0 = display;
}

defineSeed(505, 1, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), AbstractHasData$DefaultKeyboardSelectionHandler_0);
_.onCellPreview = function onCellPreview(event_0){
  $onCellPreview(this, event_0);
}
;
_.display_0 = null;
function $findInteractiveColumn(this$static, start, reverse){
  var i;
  if (this$static.table.isInteractive) {
    if (reverse) {
      for (i = start - 1; i >= 0; --i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
      for (i = this$static.table.columns.size_0 - 1; i >= start; --i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
    }
     else {
      for (i = start + 1; i < this$static.table.columns.size_0; ++i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
      for (i = 0; i <= start; ++i) {
        if (isColumnInteractive($getColumn(this$static.table, i))) {
          return i;
        }
      }
    }
  }
   else {
    return 0;
  }
  return 0;
}

function AbstractCellTable$CellTableKeyboardSelectionHandler_0(table){
  this.display_0 = table;
  this.table = table;
}

defineSeed(504, 505, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), AbstractCellTable$CellTableKeyboardSelectionHandler_0);
_.onCellPreview = function onCellPreview_0(event_0){
  var col, eventType, keyCode, nativeEvent, nextColumn, oldColumn, oldRow, prevColumn, relRow, stealFocus, subrow, target;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals_4('keydown', eventType) && !event_0.isCellEditing) {
    oldRow = $getKeyboardSelectedRow(this.table.presenter);
    oldColumn = $getKeyboardSelectedColumn(this.table);
    $clinit_LocaleInfo();
    keyCode = nativeEvent.keyCode || 0;
    if (keyCode == 39) {
      nextColumn = $findInteractiveColumn(this, oldColumn, false);
      if (nextColumn <= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow + 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, nextColumn, true);
          event_0.isCanceled = true;
          event_0.nativeEvent.preventDefault();
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, nextColumn, true);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      }
    }
     else if (keyCode == 37) {
      prevColumn = $findInteractiveColumn(this, oldColumn, true);
      if (prevColumn >= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow - 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, prevColumn, true);
          event_0.isCanceled = true;
          event_0.nativeEvent.preventDefault();
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, prevColumn, true);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      }
    }
  }
   else if ($equals_4('click', eventType) || $equals_4('focus', eventType)) {
    col = event_0.context.column;
    relRow = event_0.context.index_0 - $getVisibleRange(this.table.presenter).start;
    subrow = event_0.context.subindex;
    if ($getKeyboardSelectedColumn(this.table) != col || $getKeyboardSelectedRow(this.table.presenter) != relRow || $getKeyboardSelectedSubRow(this.table) != subrow) {
      stealFocus = false;
      if ($equals_4('click', eventType)) {
        target = event_0.nativeEvent.target;
        stealFocus = (!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , !$isFocusable(impl_3, target));
      }
      $setKeyboardSelectedRow(this.table, relRow, subrow, stealFocus);
      $setKeyboardSelectedColumn(this.table, col, stealFocus);
    }
    return;
  }
  $onCellPreview(this, event_0);
}
;
_.table = null;
function $convertToSectionElement(this$static, table, sectionTag, rowHtml){
  var tableElem, sb, sb_0, sb_1;
  $setEventListener(this$static.tmpElem, table);
  sectionTag = sectionTag.toLowerCase();
  if ($equals_4('tbody', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb = new StringBuilder_0 , $append_0(sb.data_0, '<table><tbody>') , $append_7(sb, rowHtml.html) , $append_0(sb.data_0, '<\/tbody><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb.data_0))).html);
  }
   else if ($equals_4('thead', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_0 = new StringBuilder_0 , $append_0(sb_0.data_0, '<table><thead>') , $append_7(sb_0, rowHtml.html) , $append_0(sb_0.data_0, '<\/thead><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_0.data_0))).html);
  }
   else if ($equals_4('tfoot', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_1 = new StringBuilder_0 , $append_0(sb_1.data_0, '<table><tfoot>') , $append_7(sb_1, rowHtml.html) , $append_0(sb_1.data_0, '<\/tfoot><\/table>') , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_0($toString_0(sb_1.data_0))).html);
  }
   else {
    throw new IllegalArgumentException_1('Invalid table section tag: ' + sectionTag);
  }
  tableElem = $getFirstChildElement(this$static.tmpElem);
  this$static.tmpElem.__listener = null;
  if ($equals_4('tbody', sectionTag)) {
    return tableElem.tBodies[0];
  }
   else if ($equals_4('thead', sectionTag)) {
    return tableElem.tHead;
  }
   else if ($equals_4('tfoot', sectionTag)) {
    return tableElem.tFoot;
  }
   else {
    throw new IllegalArgumentException_1('Invalid table section tag: ' + sectionTag);
  }
}

function $replaceAllRows(this$static, table, section, html){
  var sectionName, newSection, tableElement;
  $isAttached(table) || $setEventListener(table.element, table);
  $getParentElement(section);
  $getNextSiblingElement(section);
  table?(sectionName = section.tagName.toLowerCase() , newSection = $convertToSectionElement(this$static, table, sectionName, html) , tableElement = table.element , tableElement.replaceChild(newSection, section) , $equals_4('tbody', sectionName)?(table.tbody = newSection):$equals_4('thead', sectionName)?(table.thead = newSection):$equals_4('tfoot', sectionName) && (table.tfoot = newSection) , undefined):$replaceAllRowsImplLegacy(this$static, section, html);
  $isAttached(table) || (table.element.__listener = null , undefined);
}

function $replaceChildren_0(this$static, table, section, html, startIndex, childCount){
  var absEndIndex, count, insertBefore, newChild, newSection, next;
  $isAttached(table) || $setEventListener(table.element, table);
  $getParentElement(section);
  $getNextSiblingElement(section);
  absEndIndex = $getVisibleRange(table.presenter).start + startIndex + childCount;
  insertBefore = $getSubRowElement(table, startIndex + $getVisibleRange(table.presenter).start, 0);
  if (table.legacyRenderRowValues) {
    count = 0;
    while (!!insertBefore && count < childCount) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
      ++count;
    }
  }
   else {
    while (!!insertBefore && $getRowValueIndex(table.tableBuilder, insertBefore) < absEndIndex) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
    }
  }
  newSection = $convertToSectionElement(this$static, table, section.tagName, html);
  newChild = $getFirstChildElement(newSection);
  while (newChild) {
    next = $getNextSiblingElement(newChild);
    section.insertBefore(newChild, insertBefore);
    newChild = next;
  }
  $isAttached(table) || (table.element.__listener = null , undefined);
}

defineSeed(506, 1, {});
function $replaceAllRowsImplLegacy(this$static, section, html){
  var child, newSection, next;
  child = $getFirstChildElement(section);
  while (child) {
    next = $getNextSiblingElement(child);
    section.removeChild(child);
    child = next;
  }
  newSection = $convertToSectionElement(this$static, null, section.tagName, html);
  child = $getFirstChildElement(newSection);
  while (child) {
    next = $getNextSiblingElement(child);
    section.appendChild(child);
    child = next;
  }
}

function AbstractCellTable$ImplTrident_0(){
  this.tmpElem = $doc.createElement('div');
}

defineSeed(507, 506, {}, AbstractCellTable$ImplTrident_0);
function $buildRow(this$static, rowValue, absRowIndex){
  this$static.rowIndex = absRowIndex;
  $getValueKey(this$static.cellTable, rowValue);
  this$static.subrowIndex = 0;
  $buildRowImpl(this$static, rowValue, absRowIndex);
}

function $finish_0(this$static){
  while (this$static.tbody.delegate_0.stack.size_0 > 0) {
    $end_0(this$static.tbody.delegate_0, 'tbody');
  }
  return this$static.tbody;
}

function $getCellId(elem){
  var cellId;
  if (!elem) {
    return null;
  }
  cellId = elem.getAttribute('__gwt_cell') || '';
  return cellId == null || cellId.length == 0?null:cellId;
}

function $getColumn_0(this$static, elem){
  var cellId;
  cellId = $getCellId(elem);
  return cellId == null?null:dynamicCast(this$static.idToCellMap.get_0(cellId), Q$HasCell);
}

function $getRowValueIndex(this$static, row){
  try {
    return __parseAndValidateInt(row.getAttribute('__gwt_row') || '', -2147483648, 2147483647);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      return row.sectionRowIndex + $getVisibleRange(this$static.cellTable.presenter).start;
    }
     else 
      throw $e0;
  }
}

function $getSubrowValueIndex(row){
  try {
    return __parseAndValidateInt(row.getAttribute('__gwt_subrow') || '', -2147483648, 2147483647);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      return 0;
    }
     else 
      throw $e0;
  }
}

function $renderCell(this$static, builder, context, column, rowValue){
  var cellBuilder, cellId;
  cellId = dynamicCast(this$static.cellToIdMap.get_0(column), Q$String);
  if (cellId == null) {
    cellId = 'cell-' + $createUniqueId($doc);
    this$static.idToCellMap.put(cellId, column);
    this$static.cellToIdMap.put(column, cellId);
  }
  $attribute_0(builder.delegate, '__gwt_cell', cellId);
  cellBuilder = new SafeHtmlBuilder_0;
  column?column.cell.render(context, column.getValue(rowValue), cellBuilder):null.cell.render(context, null.nullMethod(), cellBuilder);
  $html(builder, new SafeHtmlString_0($toString_0(cellBuilder.sb.data_0)));
}

function $start(this$static, isRebuildingAllRows){
  this$static.tbody = $startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'tbody');
  if (isRebuildingAllRows) {
    this$static.cellToIdMap.clear();
    this$static.idToCellMap.clear();
  }
}

function $startRow(this$static){
  var row;
  while (this$static.tbody.delegate_0.stack.size_0 > 1) {
    $end(this$static.tbody.delegate_0);
  }
  if (this$static.tbody.delegate_0.stack.size_0 < 1) {
    throw new IllegalStateException_1('Cannot start a row.  Did you call TableRowBuilder.end() too many times?');
  }
  row = $startTR(this$static.tbody.delegate);
  $attribute_1(row, '__gwt_row', this$static.rowIndex);
  $attribute_1(row, '__gwt_subrow', this$static.subrowIndex);
  ++this$static.subrowIndex;
  return row;
}

defineSeed(508, 1, {});
_.cellTable = null;
_.rowIndex = 0;
_.subrowIndex = 0;
_.tbody = null;
function AbstractCellTable_TemplateImpl_0(){
}

defineSeed(509, 1, {}, AbstractCellTable_TemplateImpl_0);
function AbstractHasData$1_0(val$elem){
  this.val$elem = val$elem;
  $setElement(this, this.val$elem);
}

defineSeed(510, 337, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), AbstractHasData$1_0);
_.val$elem = null;
function $addHandler_5(this$static, handler, type){
  return $addHandler_3(this$static.hasData, handler, type);
}

function $renderRowValues_0(this$static){
  var sb;
  try {
    sb = new SafeHtmlBuilder_0;
    $renderRowValues(this$static.hasData);
    return new SafeHtmlString_0($toString_0(sb.sb.data_0));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$UnsupportedOperationException)) {
      return null;
    }
     else 
      throw $e0;
  }
}

function $replaceAllChildren_0(this$static, values, stealFocus){
  var elem, html;
  html = $renderRowValues_0(this$static, $getVisibleRange(this$static.hasData.presenter));
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceAllChildren(this$static.hasData, values, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_2(this$static.hasData, new AbstractHasData$View$2_0(unmodifiableList($getCurrentState(this$static.hasData.presenter).rowData)));
}

function $replaceChildren_1(this$static, values, start, stealFocus){
  var elem, html;
  html = $renderRowValues_0(this$static, $getVisibleRange(this$static.hasData.presenter).start + start);
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceChildren(this$static.hasData, values, start, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent_2(this$static.hasData, new AbstractHasData$View$2_0(unmodifiableList($getCurrentState(this$static.hasData.presenter).rowData)));
}

function $resetFocus(this$static){
  this$static.wasFocused && (!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , $resetFocus_0(new AbstractHasData$View$1_0(this$static)));
}

function $setKeyboardSelected_0(this$static, index, seleted, stealFocus){
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  $setKeyboardSelected(this$static.hasData, index, seleted, stealFocus);
}

function $setLoadingState(this$static, state){
  this$static.hasData.isRefreshing = true;
  $onLoadingStateChanged(this$static.hasData, state);
  this$static.hasData.isRefreshing = false;
}

function AbstractHasData$View_0(hasData){
  this.hasData = hasData;
}

defineSeed(511, 1, {}, AbstractHasData$View_0);
_.hasData = null;
_.wasFocused = false;
function AbstractHasData$View$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(512, 1, {}, AbstractHasData$View$1_0);
_.execute = function execute_8(){
  var elem;
  if (!$resetFocusOnCell(this.this$1.hasData)) {
    elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this.this$1.hasData));
    !!elem && (elem.focus() , undefined);
  }
}
;
_.this$1 = null;
function AbstractHasData$View$2_0($anonymous0){
  this.value_0 = $anonymous0;
}

defineSeed(513, 305, {}, AbstractHasData$View$2_0);
function $buildFooter(this$static){
  if (!this$static.isFooter) {
    throw new UnsupportedOperationException_1('Cannot build footer because this builder is designated to build a header');
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeader(this$static){
  if (this$static.isFooter) {
    throw new UnsupportedOperationException_1('Cannot build header because this builder is designated to build a footer');
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeaderOrFooter(this$static){
  this$static.section = this$static.isFooter?$startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'tfoot'):$startTableSection((!instance_0 && (instance_0 = new HtmlBuilderFactory_0) , new HtmlBuilderImpl_0), 'thead');
  $clear_0(this$static.idToHeaderMap);
  this$static.idToColumnMap.clear();
  this$static.rowIndex = 0;
  if (!$buildHeaderOrFooterImpl(this$static)) {
    return null;
  }
  while (this$static.section.delegate_0.stack.size_0 > 0) {
    $end(this$static.section.delegate_0);
  }
  return this$static.section;
}

function $enableColumnHandlers(this$static, builder, column){
  var columnId;
  columnId = 'column-' + $createUniqueId($doc);
  this$static.idToColumnMap.put(columnId, column);
  $attribute_0(builder.delegate, '__gwt_column', columnId);
}

function $getColumn_1(this$static, elem){
  var cellId;
  cellId = $getElementAttribute(elem, '__gwt_column');
  return cellId == null?null:dynamicCast(this$static.idToColumnMap.get_0(cellId), Q$Column);
}

function $getElementAttribute(elem, attribute){
  var value;
  if (!elem) {
    return null;
  }
  value = elem.getAttribute(attribute) || '';
  return value == null || value.length == 0?null:value;
}

function $getHeader_0(this$static, elem){
  var headerId;
  headerId = $getElementAttribute(elem, '__gwt_header');
  return headerId == null?null:dynamicCast($getValue(this$static.idToHeaderMap, headerId), Q$Header);
}

function $getSortIcon(this$static, isAscending){
  var proto;
  if (isAscending) {
    if (!this$static.sortAscIconHtml) {
      proto = create_3(($clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer() , cellTableSortAscending));
      this$static.sortAscIconHtml = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0($getSafeHtml(proto.url, proto.left_0, proto.top_0, proto.width_0, proto.height_0).html));
    }
    return this$static.sortAscIconHtml;
  }
   else {
    if (!this$static.sortDescIconHtml) {
      proto = create_3(($clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer() , cellTableSortDescending));
      this$static.sortDescIconHtml = ($clinit_SafeHtmlUtils() , new SafeHtmlString_0($getSafeHtml(proto.url, proto.left_0, proto.top_0, proto.width_0, proto.height_0).html));
    }
    return this$static.sortDescIconHtml;
  }
}

function $renderHeader(this$static, out, context, header){
  var headerId, sb;
  headerId = dynamicCast($getKey(this$static.idToHeaderMap, header), Q$String);
  if (headerId == null) {
    headerId = 'header-' + $createUniqueId($doc);
    $put_2(this$static.idToHeaderMap, headerId, header);
  }
  $attribute_0(out.delegate, '__gwt_header', headerId);
  sb = new SafeHtmlBuilder_0;
  $render(header.text_0, sb);
  out.html_0(new SafeHtmlString_0($toString_0(sb.sb.data_0)));
}

function $renderSortableHeader(this$static, out, context, header, isSorted, isSortAscending){
  var halfHeight, headerContainer, iconWidth, imageHolder, outerDiv, posRight, style;
  headerContainer = out;
  isSorted = isSorted && !this$static.isFooter;
  if (isSorted) {
    posRight = ($clinit_LocaleInfo() , !this$static.isSortIconStartOfLine);
    iconWidth = isSortAscending?this$static.sortAscIconWidth:this$static.sortDescIconWidth;
    halfHeight = isSortAscending?this$static.sortAscIconHalfHeight:this$static.sortDescIconHalfHeight;
    outerDiv = $startDiv(out.delegate);
    style = $trustedProperty($position(outerDiv.delegate_0.stylesBuilder, ($clinit_Style$Position() , RELATIVE)), 'zoom');
    posRight?$paddingRight(style, iconWidth, $clinit_Style$Unit()):$paddingLeft(style, iconWidth, $clinit_Style$Unit());
    $endStyle(style.delegate);
    imageHolder = $startDiv(outerDiv.delegate);
    style = $marginTop($lineHeight($top($position(outerDiv.delegate_0.stylesBuilder, ABSOLUTE), $clinit_Style$Unit()), $clinit_Style$Unit()), -halfHeight, $clinit_Style$Unit());
    posRight?$right(style, $clinit_Style$Unit()):$left(style, $clinit_Style$Unit());
    $endStyle(style.delegate);
    $html(imageHolder, $getSortIcon(this$static, isSortAscending));
    $end_0(imageHolder.delegate_0, 'div');
    headerContainer = $startDiv(outerDiv.delegate);
  }
  $renderHeader(this$static, headerContainer, context, header);
  if (isSorted) {
    $end_0(headerContainer.delegate_0, 'div');
    $end_0(headerContainer.delegate_0, 'div');
  }
}

function $startRow_0(this$static){
  var row;
  while (this$static.section.delegate_0.stack.size_0 > 1) {
    $end(this$static.section.delegate_0);
  }
  if (this$static.section.delegate_0.stack.size_0 < 1) {
    throw new IllegalStateException_1('Cannot start a row.  Did you call TableRowBuilder.end() too many times?');
  }
  row = $startTR(this$static.section.delegate);
  $attribute_1(row, '__gwt_header_row', this$static.rowIndex);
  ++this$static.rowIndex;
  return row;
}

function AbstractHeaderOrFooterBuilder_0(table, isFooter){
  var asc, desc;
  this.idToColumnMap = new HashMap_0;
  this.idToHeaderMap = new AbstractHeaderOrFooterBuilder$TwoWayHashMap_0;
  this.isFooter = isFooter;
  this.table = table;
  asc = ($clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer() , cellTableSortAscending);
  desc = ($clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer() , cellTableSortDescending);
  if (asc) {
    this.sortAscIconWidth = asc.width_0 + 6;
    this.sortAscIconHalfHeight = toInt(fromDouble(round0(asc.height_0 / 2)));
  }
   else {
    this.sortAscIconWidth = 0;
    this.sortAscIconHalfHeight = 0;
  }
  if (desc) {
    this.sortDescIconWidth = desc.width_0 + 6;
    this.sortDescIconHalfHeight = toInt(fromDouble(round0(desc.height_0 / 2)));
  }
   else {
    this.sortDescIconWidth = 0;
    this.sortDescIconHalfHeight = 0;
  }
}

defineSeed(514, 1, {});
_.isFooter = false;
_.isSortIconStartOfLine = true;
_.rowIndex = 0;
_.section = null;
_.sortAscIconHalfHeight = 0;
_.sortAscIconHtml = null;
_.sortAscIconWidth = 0;
_.sortDescIconHalfHeight = 0;
_.sortDescIconHtml = null;
_.sortDescIconWidth = 0;
_.table = null;
function $clear_0(this$static){
  this$static.keyToValue.clear();
  this$static.valueToKey.clear();
}

function $getKey(this$static, value){
  return this$static.valueToKey.get_0(value);
}

function $getValue(this$static, key){
  return this$static.keyToValue.get_0(key);
}

function $put_2(this$static, key, value){
  this$static.keyToValue.put(key, value);
  this$static.valueToKey.put(value, key);
}

function AbstractHeaderOrFooterBuilder$TwoWayHashMap_0(){
  this.keyToValue = new HashMap_0;
  this.valueToKey = new HashMap_0;
}

defineSeed(515, 1, {}, AbstractHeaderOrFooterBuilder$TwoWayHashMap_0);
function $getPageCount(this$static){
  var pageSize;
  if (!this$static.display_0) {
    return -1;
  }
  pageSize = !this$static.display_0?-1:$getVisibleRange(this$static.display_0.presenter).length_0;
  return ~~(($getCurrentState(this$static.display_0.presenter).rowCount + pageSize - 1) / pageSize);
}

function $handleRowCountChange(this$static){
  var oldRowCount;
  oldRowCount = this$static.lastRowCount;
  this$static.lastRowCount = $getCurrentState(this$static.display_0.presenter).rowCount;
  oldRowCount != this$static.lastRowCount && this$static.setPageStart(!this$static.display_0?-1:$getVisibleRange(this$static.display_0.presenter).start);
  $onRangeOrRowCountChanged(this$static);
}

function $hasNextPage(this$static){
  var range;
  if (!this$static.display_0) {
    return false;
  }
   else if (!$getCurrentState(this$static.display_0.presenter).rowCountIsExact) {
    return true;
  }
  range = $getVisibleRange(this$static.display_0.presenter);
  return range.start + range.length_0 < $getCurrentState(this$static.display_0.presenter).rowCount;
}

function $hasNextPages(this$static, pages){
  var range;
  if (!this$static.display_0) {
    return false;
  }
  range = $getVisibleRange(this$static.display_0.presenter);
  return range.start + pages * range.length_0 < $getCurrentState(this$static.display_0.presenter).rowCount;
}

function $nextPage(this$static){
  var range;
  if (this$static.display_0) {
    range = $getVisibleRange(this$static.display_0.presenter);
    this$static.setPageStart(range.start + range.length_0);
  }
}

function $previousPage(this$static){
  var range;
  if (this$static.display_0) {
    range = $getVisibleRange(this$static.display_0.presenter);
    this$static.setPageStart(range.start - range.length_0);
  }
}

function $setDisplay(this$static, display){
  if (this$static.rangeChangeHandler) {
    $removeHandler(this$static.rangeChangeHandler.real);
    this$static.rangeChangeHandler = null;
  }
  if (this$static.rowCountChangeHandler) {
    $removeHandler(this$static.rowCountChangeHandler.real);
    this$static.rowCountChangeHandler = null;
  }
  this$static.display_0 = display;
  if (display) {
    this$static.rangeChangeHandler = $addRangeChangeHandler(display, new AbstractPager$1_0(this$static));
    this$static.rowCountChangeHandler = $addRowCountChangeHandler(display, new AbstractPager$2_0(this$static));
    $onRangeOrRowCountChanged(this$static);
  }
}

function $setPage(this$static, index){
  var pageSize;
  if (!!this$static.display_0 && (!$getCurrentState(this$static.display_0.presenter).rowCountIsExact || !!this$static.display_0 && (!this$static.display_0?-1:$getVisibleRange(this$static.display_0.presenter).length_0) * index < $getCurrentState(this$static.display_0.presenter).rowCount)) {
    pageSize = !this$static.display_0?-1:$getVisibleRange(this$static.display_0.presenter).length_0;
    $setVisibleRange(this$static.display_0, new Range_1(pageSize * index, pageSize));
  }
}

function $setPageStart(this$static, index){
  var pageSize, range;
  if (this$static.display_0) {
    range = $getVisibleRange(this$static.display_0.presenter);
    pageSize = range.length_0;
    $getCurrentState(this$static.display_0.presenter).rowCountIsExact && (index = min_0(index, $getCurrentState(this$static.display_0.presenter).rowCount - pageSize));
    index = 0 > index?0:index;
    index != range.start && $setVisibleRange(this$static.display_0, new Range_1(index, pageSize));
  }
}

defineSeed(516, 500, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]));
_.display_0 = null;
_.lastRowCount = 0;
_.rangeChangeHandler = null;
_.rowCountChangeHandler = null;
function AbstractPager$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(517, 1, makeCastMap([Q$EventHandler, Q$RangeChangeEvent$Handler]), AbstractPager$1_0);
_.onRangeChange = function onRangeChange(event_0){
  !!this.this$0.display_0 && $onRangeOrRowCountChanged(this.this$0);
}
;
_.this$0 = null;
function AbstractPager$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(518, 1, makeCastMap([Q$EventHandler, Q$RowCountChangeEvent$Handler]), AbstractPager$2_0);
_.this$0 = null;
function $isFocusable(this$static, elem){
  return $contains_1(this$static.focusableTypes, elem.tagName.toLowerCase()) || $getTabIndex(elem) >= 0;
}

function $sinkEvents_0(this$static, widget, typeNames){
  var eventsToSink, typeInt, typeName, typeName$iterator;
  if (!typeNames) {
    return;
  }
  eventsToSink = 0;
  for (typeName$iterator = $iterator($keySet_0(typeNames.map)); typeName$iterator.val$outerIter.hasNext();) {
    typeName = dynamicCast($next_6(typeName$iterator), Q$String);
    typeInt = $eventGetTypeInt(typeName);
    if (typeInt < 0) {
      $sinkBitlessEvent_0(widget.element, typeName);
    }
     else {
      typeInt = $sinkEvent(this$static, widget, typeName);
      typeInt > 0 && (eventsToSink |= typeInt);
    }
  }
  eventsToSink > 0 && (widget.eventsToSink == -1?sinkEvents_0(widget.element, eventsToSink | (widget.element.__eventBits || 0)):(widget.eventsToSink |= eventsToSink));
}

defineSeed(519, 1, {});
_.focusableTypes = null;
var impl_3 = null;
function $initEventSystem(){
  dispatchNonBubblingEvent = $entry(function(evt){
    handleNonBubblingEvent(evt);
  }
  );
}

function $sinkEvent(this$static, widget, typeName){
  var elem;
  if ($contains_1(this$static.nonBubblingEvents, typeName)) {
    !dispatchNonBubblingEvent && $initEventSystem();
    elem = widget.element;
    if (!$equals_4('true', elem.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '')) {
      elem.setAttribute('__gwtCellBasedWidgetImplDispatching' + typeName, 'true');
      elem.addEventListener(typeName, dispatchNonBubblingEvent, true);
    }
    return -1;
  }
   else {
    return $eventGetTypeInt(typeName);
  }
}

function handleNonBubblingEvent(event_0){
  var eventTarget, listener, target, typeName;
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  typeName = event_0.type;
  listener = target.__listener;
  while (!!target && !listener) {
    target = $getParentElement(target);
    !!target && $equals_4('true', target.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '') && (listener = target.__listener);
  }
  !!listener && (dispatchEvent_0(event_0, target, listener) , undefined);
}

defineSeed(520, 519, {});
_.nonBubblingEvents = null;
var dispatchNonBubblingEvent = null;
function $resetFocus_0(command){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE_0), command);
}

function CellBasedWidgetImplStandardBase_0(){
  this.focusableTypes = new HashSet_0;
  $add_20(this.focusableTypes, 'select');
  $add_20(this.focusableTypes, 'input');
  $add_20(this.focusableTypes, 'textarea');
  $add_20(this.focusableTypes, 'option');
  $add_20(this.focusableTypes, 'button');
  $add_20(this.focusableTypes, 'label');
  this.nonBubblingEvents = new HashSet_0;
  $add_20(this.nonBubblingEvents, 'focus');
  $add_20(this.nonBubblingEvents, 'blur');
  $add_20(this.nonBubblingEvents, 'load');
  $add_20(this.nonBubblingEvents, 'error');
}

defineSeed(521, 520, {}, CellBasedWidgetImplStandardBase_0);
function $addColumnStyleName(this$static, index){
  $assertColumnGroupEnabled(this$static, 'Cannot add column style when colgroup is disabled');
  $addClassName($ensureTableColElement(this$static, index), 'backgroundContentHeaderTableCell');
}

function $assertColumnGroupEnabled(this$static, message){
  if (!this$static.colGroupEnabled) {
    throw new IllegalStateException_1(message);
  }
}

function $doSetColumnWidth(this$static, column, width){
  this$static.colGroupEnabled && (width == null?($ensureTableColElement(this$static, column).style['width'] = '' , undefined):($ensureTableColElement(this$static, column).style['width'] = width , undefined));
}

function $ensureTableColElement(this$static, index){
  var i;
  for (i = this$static.colgroup.childNodes.length; i <= index; ++i) {
    $appendChild(this$static.colgroup, $doc.createElement('col'));
  }
  return $getChild(this$static.colgroup, index);
}

function $onLoadingStateChanged(this$static, state){
  var message;
  message = null;
  state == ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)?(message = this$static.loadingIndicatorContainer):state == LOADED && $isEmpty_0(this$static.presenter) && (message = this$static.emptyTableWidgetContainer);
  !!message && this$static.messagesPanel.showWidget($getWidgetIndex(this$static.messagesPanel, message));
  $setColSpan(this$static.tbodyLoadingCell, max_0(1, max_0(this$static.columns.size_0, 0)));
  $showOrHide(this$static.tbody, !message);
  $showOrHide(this$static.tbodyLoading, !!message);
  $fireEvent_2(this$static, new LoadingStateChangeEvent_0);
}

function $refreshColumnWidths_0(this$static){
  var colCount, i;
  $refreshColumnWidths(this$static);
  if (this$static.colGroupEnabled) {
    colCount = this$static.colgroup.childNodes.length;
    for (i = max_0(this$static.columns.size_0, 0); i < colCount; ++i) {
      this$static.colGroupEnabled && ($ensureTableColElement(this$static, i).style['width'] = '0px' , undefined);
    }
  }
}

function $setColumnWidth_3(this$static, column, width){
  $assertColumnGroupEnabled(this$static, 'Cannot set column width when colgroup is disabled');
  this$static.columnWidths.put(column, width);
  $updateColumnWidthImpl(this$static, column, width);
}

function $setEmptyTableWidget(this$static, widget){
  this$static.emptyTableWidgetContainer.setWidget(widget);
}

function $setTableLayoutFixed(this$static){
  if (!this$static.colGroupEnabled) {
    throw new IllegalStateException_1('Cannot set table to fixed layout when colgroup is disabled');
  }
  this$static.table.style['tableLayout'] = ($clinit_Style$TableLayout() , 'fixed');
}

function $setWidth_0(this$static){
  this$static.element.style['width'] = '100%';
  $setTableLayoutFixed(this$static);
}

function CellTable_0(){
  var loadingImg;
  CellTable_1.call(this, (loadingImg = ($clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableLoadingInitializer() , cellTableLoading) , !loadingImg?null:new Image_2(loadingImg)));
}

function CellTable_1(loadingIndicator){
  CellTable_2.call(this, loadingIndicator);
}

function CellTable_2(loadingIndicator){
  var eventTypes, tr;
  AbstractCellTable_0.call(this, $doc.createElement('table'), new CellTable$ResourcesAdapter_0);
  this.emptyTableWidgetContainer = new SimplePanel_0;
  this.loadingIndicatorContainer = new SimplePanel_0;
  this.messagesPanel = new DeckPanel_0;
  this.style_0 = ($clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableStyleInitializer() , cellTableStyle);
  $ensureInjected_0(this.style_0);
  this.colGroupEnabled = true;
  this.table = this.element;
  this.table.cellSpacing = 0;
  this.colgroup = $doc.createElement('colgroup');
  $appendChild(this.table, this.colgroup);
  this.thead = this.table.createTHead();
  if (this.table.tBodies.length > 0) {
    this.tbody = this.table.tBodies[0];
  }
   else {
    this.tbody = $doc.createElement('tbody');
    $appendChild(this.table, this.tbody);
  }
  this.tbodyLoading = $doc.createElement('tbody');
  $appendChild(this.table, this.tbodyLoading);
  this.tfoot = this.table.createTFoot();
  $setStyleName(this, 'cellTableWidget');
  this.tbodyLoadingCell = $doc.createElement('td');
  tr = $doc.createElement('tr');
  $appendChild(this.tbodyLoading, tr);
  $appendChild(tr, this.tbodyLoadingCell);
  this.tbodyLoadingCell.align = 'center';
  $appendChild(this.tbodyLoadingCell, this.messagesPanel.element);
  this.messagesPanel.setParent(this);
  this.messagesPanel.add_1(this.emptyTableWidgetContainer);
  this.messagesPanel.add_1(this.loadingIndicatorContainer);
  $setStyleName(this.loadingIndicatorContainer, 'cellTableLoading');
  this.loadingIndicatorContainer.setWidget(loadingIndicator);
  eventTypes = new HashSet_0;
  $add_20(eventTypes, 'mouseover');
  $add_20(eventTypes, 'mouseout');
  $sinkEvents_0((!impl_3 && (impl_3 = new CellBasedWidgetImplStandardBase_0) , impl_3), this, eventTypes);
}

defineSeed(522, 498, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget, Q$HasData]), CellTable_0);
_.colGroupEnabled = true;
_.colgroup = null;
_.style_0 = null;
_.table = null;
_.tbody = null;
_.tbodyLoading = null;
_.tbodyLoadingCell = null;
_.tfoot = null;
_.thead = null;
function CellTable$ResourcesAdapter_0(){
  $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableStyleInitializer();
}

defineSeed(523, 1, {}, CellTable$ResourcesAdapter_0);
function $setFieldUpdater(this$static, fieldUpdater){
  this$static.fieldUpdater = fieldUpdater;
}

function Column_0(cell){
  this.cell = cell;
}

defineSeed(524, 1, makeCastMap([Q$HasCell, Q$Column]));
_.getCell = function getCell(){
  return this.cell;
}
;
_.getFieldUpdater = function getFieldUpdater(){
  return this.fieldUpdater;
}
;
_.cell = null;
_.fieldUpdater = null;
_.isSortable = false;
function Column$1_0(val$object){
  this.val$object = val$object;
}

defineSeed(525, 1, {}, Column$1_0);
_.update = function update_0(value){
  $update_1(this.val$object, value);
}
;
_.val$object = null;
function $dispatch_2(this$static, handler){
  $onColumnSort(handler, this$static);
}

function ColumnSortEvent_2(sortList){
  this.sortList = sortList;
}

function fire_18(source, sortList){
  var event_0;
  event_0 = new ColumnSortEvent_2(sortList);
  !!TYPE_33 && !!source.handlerManager_0 && $fireEvent(source.handlerManager_0, event_0);
  return event_0;
}

defineSeed(526, 268, {}, ColumnSortEvent_2);
_.dispatch = function dispatch_23(handler){
  $dispatch_2(this, dynamicCast(handler, Q$ColumnSortEvent$Handler));
}
;
_.getAssociatedType = function getAssociatedType_24(){
  return TYPE_33;
}
;
_.sortList = null;
var TYPE_33 = null;
function $onColumnSort(this$static, event_0){
  var column, comparator;
  column = !event_0.sortList || event_0.sortList.infos.size_0 == 0?null:dynamicCast($get_6(event_0.sortList.infos, 0), Q$ColumnSortList$ColumnSortInfo).column;
  if (!column) {
    return;
  }
  comparator = dynamicCast(this$static.comparators.get_0(column), Q$Comparator);
  if (!comparator) {
    return;
  }
  !(!event_0.sortList || event_0.sortList.infos.size_0 == 0) && dynamicCast($get_6(event_0.sortList.infos, 0), Q$ColumnSortList$ColumnSortInfo).ascending?sort_1(this$static.list, comparator):sort_1(this$static.list, new ColumnSortEvent$ListHandler$1_0(comparator));
}

function $setComparator(this$static, column, comparator){
  this$static.comparators.put(column, comparator);
}

function ColumnSortEvent$ListHandler_0(list){
  this.comparators = new HashMap_0;
  this.list = list;
}

defineSeed(527, 1, makeCastMap([Q$EventHandler, Q$ColumnSortEvent$Handler]), ColumnSortEvent$ListHandler_0);
_.list = null;
function ColumnSortEvent$ListHandler$1_0(val$comparator){
  this.val$comparator = val$comparator;
}

defineSeed(528, 1, makeCastMap([Q$Comparator]), ColumnSortEvent$ListHandler$1_0);
_.compare = function compare_3(o1, o2){
  return -this.val$comparator.compare(o1, o2);
}
;
_.val$comparator = null;
function $insert(this$static, index, sortInfo){
  var column, curInfo, i;
  if (!sortInfo) {
    throw new IllegalArgumentException_1('sortInfo cannot be null');
  }
  column = sortInfo.column;
  for (i = 0; i < this$static.infos.size_0; ++i) {
    curInfo = dynamicCast($get_6(this$static.infos, i), Q$ColumnSortList$ColumnSortInfo);
    if (curInfo.column == column) {
      this$static.infos.remove_3(i);
      i < index && --index;
      --i;
    }
  }
  $add_12(this$static.infos, index, sortInfo);
  !!this$static.delegate && $onModification(this$static.delegate);
}

function $push_2(this$static, column){
  var ascending, toRet;
  ascending = true;
  this$static.infos.size_0 > 0 && dynamicCast($get_6(this$static.infos, 0), Q$ColumnSortList$ColumnSortInfo).column == column && (ascending = !dynamicCast($get_6(this$static.infos, 0), Q$ColumnSortList$ColumnSortInfo).ascending);
  toRet = new ColumnSortList$ColumnSortInfo_0(column, ascending);
  $insert(this$static, 0, toRet);
  return toRet;
}

function ColumnSortList_0(delegate){
  this.infos = new ArrayList_0;
  this.delegate = delegate;
}

defineSeed(529, 1, makeCastMap([Q$ColumnSortList]), ColumnSortList_0);
_.equals$ = function equals_16(obj){
  var other;
  if (obj === this) {
    return true;
  }
   else if (!instanceOf(obj, Q$ColumnSortList)) {
    return false;
  }
  other = dynamicCast(obj, Q$ColumnSortList);
  return $equals_3(this.infos, other.infos);
}
;
_.hashCode$ = function hashCode_18(){
  return 31 * $hashCode(this.infos) + 13;
}
;
_.delegate = null;
function $equalsOrBothNull(a, b){
  return !a?!b:a == b;
}

function ColumnSortList$ColumnSortInfo_0(column, ascending){
  this.column = column;
  this.ascending = ascending;
}

defineSeed(530, 1, makeCastMap([Q$ColumnSortList$ColumnSortInfo]), ColumnSortList$ColumnSortInfo_0);
_.equals$ = function equals_17(obj){
  var other;
  if (obj === this) {
    return true;
  }
   else if (!instanceOf(obj, Q$ColumnSortList$ColumnSortInfo)) {
    return false;
  }
  other = dynamicCast(obj, Q$ColumnSortList$ColumnSortInfo);
  return $equalsOrBothNull(this.column, other.column) && this.ascending == other.ascending;
}
;
_.hashCode$ = function hashCode_19(){
  return 31 * (!this.column?0:getHashCode(this.column)) + (this.ascending?1:0);
}
;
_.ascending = false;
_.column = null;
function $buildRowImpl(this$static, rowValue, absRowIndex){
  var column, columnCount, context, curColumn, div, isEven, isSelected, selectionModel, td, tdClasses, tr, trClasses;
  selectionModel = this$static.cellTable.presenter.selectionModel;
  isSelected = !(!selectionModel || rowValue == null) && ($resolveChanges(selectionModel) , selectionModel.selectedSet.containsKey(!selectionModel.keyProvider || rowValue == null?rowValue:dynamicCastJso(rowValue).jobId));
  isEven = absRowIndex % 2 == 0;
  trClasses = new StringBuilder_1(isEven?this$static.evenRowStyle:this$static.oddRowStyle);
  isSelected && $append_7(trClasses, this$static.selectedRowStyle);
  this$static.cellTable;
  tr = $startRow(this$static);
  $className(tr, $toString_0(trClasses.data_0));
  columnCount = this$static.cellTable.columns.size_0;
  for (curColumn = 0; curColumn < columnCount; ++curColumn) {
    column = $getColumn(this$static.cellTable, curColumn);
    tdClasses = new StringBuilder_1(this$static.cellStyle);
    $append_7(tdClasses, isEven?this$static.evenCellStyle:this$static.oddCellStyle);
    curColumn == 0 && $append_7(tdClasses, this$static.firstColumnStyle);
    isSelected && $append_7(tdClasses, this$static.selectedCellStyle);
    curColumn == columnCount - 1 && $append_7(tdClasses, this$static.lastColumnStyle);
    context = new Cell$Context_0(absRowIndex, curColumn, $getValueKey(this$static.cellTable, rowValue));
    td = $startTD(tr.delegate);
    $className(td, $toString_0(tdClasses.data_0));
    div = $startDiv(td.delegate);
    $endStyle($outlineStyle(div.delegate_0.stylesBuilder, $clinit_Style$OutlineStyle()).delegate);
    $renderCell(this$static, div, context, column, rowValue);
    $end_0(div.delegate_0, 'div');
    $end_0(td.delegate_0, 'td');
  }
  $end_0(tr.delegate_0, 'tr');
}

function DefaultCellTableBuilder_0(cellTable){
  this.idToCellMap = new HashMap_0;
  this.cellToIdMap = new HashMap_0;
  this.cellTable = cellTable;
  cellTable.resources;
  this.evenRowStyle = 'cellTableEvenRow';
  this.oddRowStyle = 'cellTableOddRow';
  this.selectedRowStyle = ' cellTableSelectedRow';
  this.cellStyle = 'cellTableCell';
  this.evenCellStyle = ' cellTableEvenRowCell';
  this.oddCellStyle = ' cellTableOddRowCell';
  this.firstColumnStyle = ' cellTableFirstColumn';
  this.lastColumnStyle = ' cellTableLastColumn';
  this.selectedCellStyle = ' cellTableSelectedRowCell';
}

defineSeed(531, 508, {}, DefaultCellTableBuilder_0);
_.cellStyle = null;
_.evenCellStyle = null;
_.evenRowStyle = null;
_.firstColumnStyle = null;
_.lastColumnStyle = null;
_.oddCellStyle = null;
_.oddRowStyle = null;
_.selectedCellStyle = null;
_.selectedRowStyle = null;
function $appendExtraStyles(header){
  if (!header) {
    return;
  }
}

function $buildHeaderOrFooterImpl(this$static){
  var className, classesBuilder, column, columnCount, context, curColumn, hasHeader, header, i, isFooter, isSortAscending, isSortable, isSorted, prevColspan, prevHeader, sortList, sortedColumn, sortedInfo, sortedStyle, table, th, tr;
  table = this$static.table;
  isFooter = this$static.isFooter;
  columnCount = table.columns.size_0;
  if (columnCount == 0) {
    return false;
  }
  hasHeader = false;
  for (i = 0; i < columnCount; ++i) {
    if (this$static.isFooter?$getFooter(this$static.table, i):$getHeader(this$static.table, i)) {
      hasHeader = true;
      break;
    }
  }
  if (!hasHeader) {
    return false;
  }
  sortList = table.sortList;
  sortedInfo = sortList.infos.size_0 == 0?null:dynamicCast($get_6(sortList.infos, 0), Q$ColumnSortList$ColumnSortInfo);
  sortedColumn = !sortedInfo?null:sortedInfo.column;
  isSortAscending = !!sortedInfo && sortedInfo.ascending;
  this$static.table.resources;
  className = this$static.isFooter?'cellTableFooter':'cellTableHeader';
  sortedStyle = ' ' + (isSortAscending?'cellTableSortedHeaderAscending':'cellTableSortedHeaderDescending');
  prevHeader = this$static.isFooter?$getFooter(this$static.table, 0):$getHeader(this$static.table, 0);
  column = $getColumn(this$static.table, 0);
  prevColspan = 1;
  isSortable = false;
  isSorted = false;
  classesBuilder = new StringBuilder_1(className);
  $append_0(classesBuilder.data_0, ' ' + (isFooter?'cellTableFirstColumnFooter':'cellTableFirstColumnHeader'));
  if (!isFooter && column.isSortable) {
    isSortable = true;
    isSorted = column == sortedColumn;
  }
  tr = $startRow_0(this$static);
  for (curColumn = 1; curColumn < columnCount; ++curColumn) {
    header = this$static.isFooter?$getFooter(this$static.table, curColumn):$getHeader(this$static.table, curColumn);
    if (header != prevHeader) {
      isSortable && ($append_0(classesBuilder.data_0, ' cellTableSortableHeader') , classesBuilder);
      isSorted && ($append_0(classesBuilder.data_0, sortedStyle) , classesBuilder);
      $appendExtraStyles(prevHeader);
      th = dynamicCast($className($colSpan($startTH(tr.delegate), prevColspan), $toString_0(classesBuilder.data_0)), Q$TableCellBuilder);
      $enableColumnHandlers(this$static, th, column);
      if (prevHeader) {
        context = new Cell$Context_0(0, curColumn - prevColspan, prevHeader);
        if (isSortable) {
          $attribute_0(th.delegate, 'role', 'button');
          $trustedAttribute(th.delegate, 'tabIndex', -1);
        }
        $renderSortableHeader(this$static, th, context, prevHeader, isSorted, isSortAscending);
      }
      $end_0(th.delegate_0, 'th');
      prevHeader = header;
      prevColspan = 1;
      classesBuilder = new StringBuilder_1(className);
      isSortable = false;
      isSorted = false;
    }
     else {
      ++prevColspan;
    }
    column = ($checkColumnBounds(table, curColumn) , dynamicCast($get_6(table.columns, curColumn), Q$Column));
    if (!isFooter && column.isSortable) {
      isSortable = true;
      isSorted = column == sortedColumn;
    }
  }
  isSortable && ($append_0(classesBuilder.data_0, ' cellTableSortableHeader') , classesBuilder);
  isSorted && ($append_0(classesBuilder.data_0, sortedStyle) , classesBuilder);
  $append_7(($append_0(classesBuilder.data_0, ' ') , classesBuilder), isFooter?'cellTableLastColumnFooter':'cellTableLastColumnHeader');
  $appendExtraStyles(prevHeader);
  th = dynamicCast($className($colSpan($startTH(tr.delegate), prevColspan), $toString_0(classesBuilder.data_0)), Q$TableCellBuilder);
  $enableColumnHandlers(this$static, th, column);
  if (prevHeader) {
    context = new Cell$Context_0(0, curColumn - prevColspan, prevHeader);
    $renderSortableHeader(this$static, th, context, prevHeader, isSorted, isSortAscending);
  }
  $end_0(th.delegate_0, 'th');
  $end_0(tr.delegate_0, 'tr');
  return true;
}

function DefaultHeaderOrFooterBuilder_0(table, isFooter){
  AbstractHeaderOrFooterBuilder_0.call(this, table, isFooter);
}

defineSeed(532, 514, {}, DefaultHeaderOrFooterBuilder_0);
function $addCellPreviewHandler_0(this$static, handler){
  return $addHandler_5(this$static.view, handler, (!TYPE_40 && (TYPE_40 = new GwtEvent$Type_0) , TYPE_40));
}

function $addRangeChangeHandler_0(this$static, handler){
  return $addHandler_5(this$static.view, handler, (!TYPE_41 && (TYPE_41 = new GwtEvent$Type_0) , TYPE_41));
}

function $addRowCountChangeHandler_0(this$static, handler){
  return $addHandler_5(this$static.view, handler, (!TYPE_42 && (TYPE_42 = new GwtEvent$Type_0) , TYPE_42));
}

function $calculateModifiedRanges(modifiedRows, pageStart, pageEnd){
  var diff, i, index, maxDiff, rangeEnd0, rangeEnd1, rangeLength0, rangeLength1, rangeStart0, rangeStart1, toRet;
  sortJsArrayInteger(modifiedRows);
  rangeStart0 = -1;
  rangeEnd0 = -1;
  rangeStart1 = -1;
  rangeEnd1 = -1;
  maxDiff = 0;
  for (i = 0; i < modifiedRows.length; ++i) {
    index = modifiedRows[i];
    if (index < pageStart || index >= pageEnd) {
      continue;
    }
     else if (rangeStart0 == -1) {
      rangeStart0 = index;
      rangeEnd0 = index;
    }
     else if (rangeStart1 == -1) {
      maxDiff = index - rangeEnd0;
      rangeStart1 = index;
      rangeEnd1 = index;
    }
     else {
      diff = index - rangeEnd1;
      if (diff > maxDiff) {
        rangeEnd0 = rangeEnd1;
        rangeStart1 = index;
        rangeEnd1 = index;
        maxDiff = diff;
      }
       else {
        rangeEnd1 = index;
      }
    }
  }
  rangeEnd0 += 1;
  rangeEnd1 += 1;
  if (rangeStart1 == rangeEnd0) {
    rangeEnd0 = rangeEnd1;
    rangeStart1 = -1;
    rangeEnd1 = -1;
  }
  toRet = new ArrayList_0;
  if (rangeStart0 != -1) {
    rangeLength0 = rangeEnd0 - rangeStart0;
    $add_13(toRet, new Range_1(rangeStart0, rangeLength0));
  }
  if (rangeStart1 != -1) {
    rangeLength1 = rangeEnd1 - rangeStart1;
    $add_13(toRet, new Range_1(rangeStart1, rangeLength1));
  }
  return toRet;
}

function $clearSelectionModel(this$static){
  if (this$static.selectionHandler) {
    $removeHandler(this$static.selectionHandler.real);
    this$static.selectionHandler = null;
  }
  this$static.selectionModel = null;
}

function $ensurePendingState(this$static){
  !this$static.pendingState && (this$static.pendingState = new HasDataPresenter$PendingState_0(this$static.state_0));
  this$static.pendingStateCommand = new HasDataPresenter$2_0(this$static);
  $scheduleFinally_0(this$static.pendingStateCommand);
  return this$static.pendingState;
}

function $findIndexOfBestMatch(state, value, initialIndex){
  var bestMatchDiff, bestMatchIndex, curValue, diff, i, rowDataCount;
  if (value == null) {
    return -1;
  }
  bestMatchIndex = -1;
  bestMatchDiff = 2147483647;
  rowDataCount = state.rowData.size_0;
  for (i = 0; i < rowDataCount; ++i) {
    curValue = $get_6(state.rowData, i);
    if (equals__devirtual$(value, curValue)) {
      diff = initialIndex - i < 0?-(initialIndex - i):initialIndex - i;
      if (diff < bestMatchDiff) {
        bestMatchIndex = i;
        bestMatchDiff = diff;
      }
    }
  }
  return bestMatchIndex;
}

function $getCurrentState(this$static){
  return !this$static.pendingState?this$static.state_0:this$static.pendingState;
}

function $getKeyboardSelectedRow(this$static){
  return (!this$static.pendingState?this$static.state_0:this$static.pendingState).keyboardSelectedRow;
}

function $getVisibleItem(this$static, indexOnPage){
  return $getRowDataValue(!this$static.pendingState?this$static.state_0:this$static.pendingState, indexOnPage);
}

function $getVisibleItemCount(this$static){
  return (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0;
}

function $getVisibleRange(this$static){
  return new Range_1((!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize);
}

function $isEmpty_0(this$static){
  return (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCountIsExact && (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCount == 0;
}

function $resolvePendingState(this$static, modifiedRows){
  var absStart, bestMatchIndex, e, i, isSelected, keyboardRowChanged, length_0, modifiedRanges, newSelectedRow, newState, newlySelectedRows, oldPageSize, oldPageStart, oldRowDataCount, oldSelectedRow, oldState, pageEnd, pageSize, pageStart, range, range$iterator, range0, range1, redrawRequired, relStart, replaceDiff, replaceValues, replacedEmptyRange, replacedRange, replacedRange$iterator, rowDataCount, rowValue, start, wasSelected, cacheSize, curPageSize;
  this$static.pendingStateCommand = null;
  if (this$static.isResolvingState) {
    return false;
  }
  this$static.isResolvingState = true;
  if (!this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    return false;
  }
  ++this$static.pendingStateLoop;
  if (this$static.pendingStateLoop > 10) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    throw new IllegalStateException_1('A possible infinite loop has been detected in a Cell Widget. This usually happens when your SelectionModel triggers a SelectionChangeEvent when SelectionModel.isSelection() is called, which causes the table to redraw continuously.');
  }
  oldState = this$static.state_0;
  newState = this$static.pendingState;
  this$static.state_0 = this$static.pendingState;
  this$static.pendingState = null;
  !modifiedRows && (modifiedRows = []);
  pageStart = newState.pageStart;
  pageSize = newState.pageSize;
  pageEnd = pageStart + pageSize;
  rowDataCount = newState.rowData.size_0;
  newState.keyboardSelectedRow = max_0(0, min_0(newState.keyboardSelectedRow, rowDataCount - 1));
  if (newState.keyboardSelectedRowChanged) {
    newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
  }
   else if (newState.keyboardSelectedRowValue != null) {
    bestMatchIndex = $findIndexOfBestMatch(newState, newState.keyboardSelectedRowValue, newState.keyboardSelectedRow);
    if (bestMatchIndex >= 0) {
      newState.keyboardSelectedRow = bestMatchIndex;
      newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
    }
     else {
      newState.keyboardSelectedRow = 0;
      newState.keyboardSelectedRowValue = null;
    }
  }
  keyboardRowChanged = newState.keyboardSelectedRowChanged || oldState.keyboardSelectedRow != newState.keyboardSelectedRow || oldState.keyboardSelectedRowValue == null && newState.keyboardSelectedRowValue != null;
  newlySelectedRows = new HashSet_0;
  try {
    for (i = pageStart; i < pageStart + rowDataCount; ++i) {
      rowValue = $get_6(newState.rowData, i - pageStart);
      isSelected = rowValue != null && !!this$static.selectionModel && $isSelected(this$static.selectionModel, rowValue);
      wasSelected = $contains_1(oldState.selectedRows, valueOf_1(i));
      if (isSelected) {
        $add_20(newState.selectedRows, valueOf_1(i));
        $add_20(newlySelectedRows, valueOf_1(i));
        wasSelected || $push(modifiedRows, i);
      }
       else 
        wasSelected && $push(modifiedRows, i);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RuntimeException)) {
      e = $e0;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw e;
    }
     else 
      throw $e0;
  }
  replacedEmptyRange = false;
  for (replacedRange$iterator = new AbstractList$IteratorImpl_0(newState.replacedRanges); replacedRange$iterator.i < replacedRange$iterator.this$0_0.size_1();) {
    replacedRange = dynamicCast($next_5(replacedRange$iterator), Q$Range);
    start = replacedRange.start;
    length_0 = replacedRange.length_0;
    length_0 == 0 && (replacedEmptyRange = true);
    for (i = start; i < start + length_0; ++i) {
      $push(modifiedRows, i);
    }
  }
  if (modifiedRows.length > 0 && keyboardRowChanged) {
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
  }
  if (this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingState.selectedValue = newState.selectedValue;
    this$static.pendingState.selectedRows.addAll(newlySelectedRows);
    keyboardRowChanged && (this$static.pendingState.keyboardSelectedRowChanged = true);
    newState.keyboardStealFocus && (this$static.pendingState.keyboardStealFocus = true);
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
    if ($resolvePendingState(this$static, modifiedRows)) {
      return true;
    }
  }
  modifiedRanges = $calculateModifiedRanges(modifiedRows, pageStart, pageEnd);
  range0 = modifiedRanges.size_0 > 0?(checkIndex(0, modifiedRanges.size_0) , dynamicCast(modifiedRanges.array[0], Q$Range)):null;
  range1 = modifiedRanges.size_0 > 1?(checkIndex(1, modifiedRanges.size_0) , dynamicCast(modifiedRanges.array[1], Q$Range)):null;
  replaceDiff = 0;
  for (range$iterator = new AbstractList$IteratorImpl_0(modifiedRanges); range$iterator.i < range$iterator.this$0_0.size_1();) {
    range = dynamicCast($next_5(range$iterator), Q$Range);
    replaceDiff += range.length_0;
  }
  oldPageStart = oldState.pageStart;
  oldPageSize = oldState.pageSize;
  oldRowDataCount = oldState.rowData.size_0;
  redrawRequired = newState.redrawRequired;
  pageStart != oldPageStart?(redrawRequired = true):rowDataCount < oldRowDataCount?(redrawRequired = true):!range1 && !!range0 && range0.start == pageStart && (replaceDiff >= oldRowDataCount || replaceDiff > oldPageSize)?(redrawRequired = true):replaceDiff >= 5 && replaceDiff > 0.3 * oldRowDataCount?(redrawRequired = true):replacedEmptyRange && oldRowDataCount == 0 && (redrawRequired = true);
  cacheSize = (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0;
  curPageSize = (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCountIsExact?min_0((!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCount - (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart):(!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize;
  cacheSize >= curPageSize?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADED)):cacheSize == 0?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)):$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , PARTIALLY_LOADED));
  try {
    if (redrawRequired) {
      new SafeHtmlBuilder_0;
      $replaceAllChildren_0(this$static.view, newState.rowData, newState.keyboardStealFocus);
      $resetFocus(this$static.view);
    }
     else if (range0) {
      absStart = range0.start;
      relStart = absStart - pageStart;
      new SafeHtmlBuilder_0;
      replaceValues = new AbstractList$SubList_0(newState.rowData, relStart, relStart + range0.length_0);
      $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      if (range1) {
        absStart = range1.start;
        relStart = absStart - pageStart;
        new SafeHtmlBuilder_0;
        replaceValues = new AbstractList$SubList_0(newState.rowData, relStart, relStart + range1.length_0);
        $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      }
      $resetFocus(this$static.view);
    }
     else if (keyboardRowChanged) {
      oldSelectedRow = oldState.keyboardSelectedRow;
      oldSelectedRow >= 0 && oldSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, oldSelectedRow, false, false);
      newSelectedRow = newState.keyboardSelectedRow;
      newSelectedRow >= 0 && newSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, newSelectedRow, true, newState.keyboardStealFocus);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Error)) {
      e = $e0;
      throw new RuntimeException_2(e);
    }
     else 
      throw $e0;
  }
   finally {
    this$static.isResolvingState = false;
  }
  $resolvePendingState(this$static, null);
  return true;
}

function $scheduleFinally_0(command){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), command);
}

function $setKeyboardSelectedRow_2(this$static, index, stealFocus, forceUpdate){
  var absIndex, newPageSize, newPageStart, pageSize, pageStart, pending, rowCount, shift;
  this$static.keyboardPagingPolicy.isLimitedToRange && (index = max_0(0, min_0(index, (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0 - 1)));
  $ensurePendingState(this$static).viewTouched = true;
  if (!forceUpdate && (!this$static.pendingState?this$static.state_0:this$static.pendingState).keyboardSelectedRow == index && (!this$static.pendingState?this$static.state_0:this$static.pendingState).keyboardSelectedRowValue != null) {
    return;
  }
  pageStart = (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize;
  rowCount = (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCount;
  absIndex = pageStart + index;
  absIndex >= rowCount && (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCountIsExact && (absIndex = rowCount - 1);
  index = (0 > absIndex?0:absIndex) - pageStart;
  this$static.keyboardPagingPolicy.isLimitedToRange && (index = 0 > (index < pageSize - 1?index:pageSize - 1)?0:index < pageSize - 1?index:pageSize - 1);
  newPageStart = pageStart;
  newPageSize = pageSize;
  pending = $ensurePendingState(this$static);
  pending.keyboardSelectedRow = 0;
  pending.keyboardSelectedRowValue = null;
  pending.keyboardSelectedRowChanged = true;
  if (index >= 0 && index < pageSize) {
    pending.keyboardSelectedRow = index;
    pending.keyboardSelectedRowValue = index < pending.rowData.size_0?$getRowDataValue($ensurePendingState(this$static), index):null;
    pending.keyboardStealFocus = stealFocus;
    return;
  }
   else if (($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == this$static.keyboardPagingPolicy) {
    while (index < 0) {
      shift = pageSize < newPageStart?pageSize:newPageStart;
      newPageStart -= shift;
      index += shift;
    }
    while (index >= pageSize) {
      newPageStart += pageSize;
      index -= pageSize;
    }
  }
   else if (INCREASE_RANGE == this$static.keyboardPagingPolicy) {
    while (index < 0) {
      shift = 30 < newPageStart?30:newPageStart;
      newPageSize += shift;
      newPageStart -= shift;
      index += shift;
    }
    while (index >= newPageSize) {
      newPageSize += 30;
    }
    if ((!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCountIsExact) {
      newPageSize = newPageSize < rowCount - newPageStart?newPageSize:rowCount - newPageStart;
      index >= rowCount && (index = rowCount - 1);
    }
  }
  if (newPageStart != pageStart || newPageSize != pageSize) {
    pending.keyboardSelectedRow = index;
    $setVisibleRange_0(this$static, new Range_1(newPageStart, newPageSize), false);
  }
}

function $setRowCount_0(this$static, count, isExact){
  if (count == (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCount && isExact == (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCountIsExact) {
    return;
  }
  $ensurePendingState(this$static).rowCount = count;
  $ensurePendingState(this$static).rowCountIsExact = isExact;
  $updateCachedData(this$static);
  fire_22(this$static.display_0);
}

function $setRowData(this$static, start, values){
  var boundedEnd, boundedStart, cacheOffset, dataIndex, i, pageEnd, pageStart, pending, value, valuesEnd, valuesLength;
  valuesLength = values.size_1();
  valuesEnd = start + valuesLength;
  pageStart = (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart;
  pageEnd = (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart + (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize;
  boundedStart = start > pageStart?start:pageStart;
  boundedEnd = valuesEnd < pageEnd?valuesEnd:pageEnd;
  if (start != pageStart && boundedStart >= boundedEnd) {
    return;
  }
  pending = $ensurePendingState(this$static);
  cacheOffset = max_0(0, boundedStart - pageStart - (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0);
  for (i = 0; i < cacheOffset; ++i) {
    $add_13(pending.rowData, null);
  }
  for (i = boundedStart; i < boundedEnd; ++i) {
    value = values.get(i - start);
    dataIndex = i - pageStart;
    dataIndex < (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0?$set_2(pending.rowData, dataIndex, value):$add_13(pending.rowData, value);
  }
  $add_13(pending.replacedRanges, new Range_1(boundedStart - cacheOffset, boundedEnd - (boundedStart - cacheOffset)));
  valuesEnd > (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCount && $setRowCount_0(this$static, valuesEnd, (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCountIsExact);
}

function $setSelectionModel_0(this$static, selectionModel){
  $clearSelectionModel(this$static);
  this$static.selectionModel = selectionModel;
  !!selectionModel && (this$static.selectionHandler = $addSelectionChangeHandler(selectionModel, new HasDataPresenter$1_0(this$static)));
  $ensurePendingState(this$static);
}

function $setVisibleRange_0(this$static, range, clearData){
  var decrease, i, increase, length_0, pageSize, pageSizeChanged, pageStart, pageStartChanged, pending, start;
  start = range.start;
  length_0 = range.length_0;
  if (start < 0) {
    throw new IllegalArgumentException_1('Range start cannot be less than 0');
  }
  if (length_0 < 0) {
    throw new IllegalArgumentException_1('Range length cannot be less than 0');
  }
  pageStart = (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize;
  pageStartChanged = pageStart != start;
  if (pageStartChanged) {
    pending = $ensurePendingState(this$static);
    if (!clearData) {
      if (start > pageStart) {
        increase = start - pageStart;
        if ((!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0 > increase) {
          for (i = 0; i < increase; ++i) {
            pending.rowData.remove_3(0);
          }
        }
         else {
          pending.rowData.clear();
        }
      }
       else {
        decrease = pageStart - start;
        if ((!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0 > 0 && decrease < pageSize) {
          for (i = 0; i < decrease; ++i) {
            $add_12(pending.rowData, 0, null);
          }
          $add_13(pending.replacedRanges, new Range_1(start, start + decrease - start));
        }
         else {
          pending.rowData.clear();
        }
      }
    }
    pending.pageStart = start;
  }
  pageSizeChanged = pageSize != length_0;
  pageSizeChanged && ($ensurePendingState(this$static).pageSize = length_0);
  clearData && $ensurePendingState(this$static).rowData.clear();
  $updateCachedData(this$static);
  (pageStartChanged || pageSizeChanged) && fire_21(this$static.display_0, new Range_1((!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize));
}

function $updateCachedData(this$static){
  var expectedLastIndex, lastIndex, pageStart;
  pageStart = (!this$static.pendingState?this$static.state_0:this$static.pendingState).pageStart;
  expectedLastIndex = max_0(0, min_0((!this$static.pendingState?this$static.state_0:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowCount - pageStart));
  lastIndex = (!this$static.pendingState?this$static.state_0:this$static.pendingState).rowData.size_0 - 1;
  while (lastIndex >= expectedLastIndex) {
    $ensurePendingState(this$static).rowData.remove_3(lastIndex);
    --lastIndex;
  }
}

function HasDataPresenter_0(display, view){
  this.keyboardPagingPolicy = ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE);
  this.display_0 = display;
  this.view = view;
  this.state_0 = new HasDataPresenter$DefaultState_0(25);
}

function sortJsArrayInteger(array){
  array.sort(function(x, y){
    return x - y;
  }
  );
}

defineSeed(533, 1, makeCastMap([Q$HasHandlers, Q$HasData]), HasDataPresenter_0);
_.fireEvent = function fireEvent_3(event_0){
  throw new UnsupportedOperationException_0;
}
;
_.getVisibleRange = function getVisibleRange_0(){
  return $getVisibleRange(this);
}
;
_.setRowCount = function setRowCount_0(count, isExact){
  $setRowCount_0(this, count, isExact);
}
;
_.setRowData = function setRowData_0(start, values){
  $setRowData(this, start, values);
}
;
_.display_0 = null;
_.isResolvingState = false;
_.pendingState = null;
_.pendingStateCommand = null;
_.pendingStateLoop = 0;
_.selectionHandler = null;
_.selectionModel = null;
_.state_0 = null;
_.view = null;
function HasDataPresenter$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(534, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), HasDataPresenter$1_0);
_.onSelectionChange = function onSelectionChange(event_0){
  $ensurePendingState(this.this$0);
}
;
_.this$0 = null;
function HasDataPresenter$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(535, 1, {}, HasDataPresenter$2_0);
_.execute = function execute_9(){
  this.this$0.pendingStateCommand == this && $resolvePendingState(this.this$0, null);
}
;
_.this$0 = null;
function $getRowDataValue(this$static, index){
  return $get_6(this$static.rowData, index);
}

function HasDataPresenter$DefaultState_0(pageSize){
  this.rowData = new ArrayList_0;
  this.selectedRows = new HashSet_0;
  this.pageSize = pageSize;
}

defineSeed(536, 1, {}, HasDataPresenter$DefaultState_0);
_.keyboardSelectedRow = 0;
_.keyboardSelectedRowValue = null;
_.pageSize = 0;
_.pageStart = 0;
_.rowCount = 0;
_.rowCountIsExact = false;
_.selectedValue = null;
_.viewTouched = false;
function HasDataPresenter$PendingState_0(state){
  var i, rowDataSize;
  HasDataPresenter$DefaultState_0.call(this, state.pageSize);
  this.replacedRanges = new ArrayList_0;
  this.keyboardSelectedRow = state.keyboardSelectedRow;
  this.keyboardSelectedRowValue = state.keyboardSelectedRowValue;
  this.pageSize = state.pageSize;
  this.pageStart = state.pageStart;
  this.rowCount = state.rowCount;
  this.rowCountIsExact = state.rowCountIsExact;
  this.selectedValue = state.selectedValue;
  this.viewTouched = state.viewTouched;
  rowDataSize = state.rowData.size_0;
  for (i = 0; i < rowDataSize; ++i) {
    $add_13(this.rowData, $get_6(state.rowData, i));
  }
}

defineSeed(537, 536, {}, HasDataPresenter$PendingState_0);
_.keyboardSelectedRowChanged = false;
_.keyboardStealFocus = false;
_.redrawRequired = false;
function $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy = nullMethod;
  CURRENT_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('CURRENT_PAGE', 0, true);
  CHANGE_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('CHANGE_PAGE', 1, false);
  INCREASE_RANGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy_0('INCREASE_RANGE', 2, false);
  $VALUES_17 = initValues(_3Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit, makeCastMap([Q$Serializable, Q$Enum_$1, Q$Object_$1]), Q$HasKeyboardPagingPolicy$KeyboardPagingPolicy, [CURRENT_PAGE, CHANGE_PAGE, INCREASE_RANGE]);
}

function HasKeyboardPagingPolicy$KeyboardPagingPolicy_0(enum$name, enum$ordinal, isLimitedToRange){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.isLimitedToRange = isLimitedToRange;
}

function values_18(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy();
  return $VALUES_17;
}

defineSeed(538, 57, makeCastMap([Q$HasKeyboardPagingPolicy$KeyboardPagingPolicy, Q$Serializable, Q$Comparable, Q$Enum]), HasKeyboardPagingPolicy$KeyboardPagingPolicy_0);
_.isLimitedToRange = false;
var $VALUES_17, CHANGE_PAGE, CURRENT_PAGE, INCREASE_RANGE;
function Header_0(cell){
  this.cell = cell;
}

defineSeed(539, 1, makeCastMap([Q$Header]));
_.cell = null;
_.updater = null;
function $clinit_LoadingStateChangeEvent(){
  $clinit_LoadingStateChangeEvent = nullMethod;
  TYPE_34 = new GwtEvent$Type_0;
}

function LoadingStateChangeEvent_0(){
  $clinit_LoadingStateChangeEvent();
}

defineSeed(540, 268, {}, LoadingStateChangeEvent_0);
_.dispatch = function dispatch_24(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_25(){
  return TYPE_34;
}
;
var TYPE_34;
function LoadingStateChangeEvent$DefaultLoadingState_0(){
}

defineSeed(541, 1, {}, LoadingStateChangeEvent$DefaultLoadingState_0);
function $clinit_LoadingStateChangeEvent$LoadingState(){
  $clinit_LoadingStateChangeEvent$LoadingState = nullMethod;
  LOADING = new LoadingStateChangeEvent$DefaultLoadingState_0;
  PARTIALLY_LOADED = new LoadingStateChangeEvent$DefaultLoadingState_0;
  LOADED = new LoadingStateChangeEvent$DefaultLoadingState_0;
}

var LOADED, LOADING, PARTIALLY_LOADED;
function RowHoverEvent_0(){
}

defineSeed(542, 268, {}, RowHoverEvent_0);
_.dispatch = function dispatch_25(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_26(){
  return TYPE_35;
}
;
var TYPE_35 = null;
function $lastPage(this$static){
  $setPage(this$static, $getPageCount(this$static) - 1);
}

function $onRangeOrRowCountChanged(this$static){
  var formatter, display, range, pageStart, pageSize, dataSize, endIndex, exact, pageSize_0;
  $setText_3(this$static.label, (formatter = ($clinit_NumberFormat() , new NumberFormat_1('#,###', $getDefaultNative(), true)) , display = this$static.display_0 , range = $getVisibleRange(display.presenter) , pageStart = range.start + 1 , pageSize = range.length_0 , dataSize = $getCurrentState(display.presenter).rowCount , endIndex = dataSize < pageStart + pageSize - 1?dataSize:pageStart + pageSize - 1 , endIndex = pageStart > endIndex?pageStart:endIndex , exact = $getCurrentState(display.presenter).rowCountIsExact , $format_0(formatter, pageStart) + '-' + $format_0(formatter, endIndex) + (exact?' of ':' of over ') + $format_0(formatter, dataSize)));
  $setPrevPageButtonsDisabled(this$static, !(!!this$static.display_0 && (!this$static.display_0?-1:$getVisibleRange(this$static.display_0.presenter).start) > 0 && $getCurrentState(this$static.display_0.presenter).rowCount > 0));
  $setNextPageButtonsDisabled(this$static, !$hasNextPage(this$static));
  !$hasNextPages(this$static, (pageSize_0 = !this$static.display_0?-1:$getVisibleRange(this$static.display_0.presenter).length_0 , pageSize_0 > 0?~~(this$static.fastForwardRows / pageSize_0):0));
}

function $setDisplay_0(this$static, display){
  var disableButtons;
  disableButtons = !display;
  $setDisabled_0(this$static.nextPage, disableButtons);
  !!this$static.lastPage && $setDisabled_0(this$static.lastPage, disableButtons);
  $setDisabled_0(this$static.firstPage, disableButtons);
  $setDisabled_0(this$static.prevPage, disableButtons);
  $setDisplay(this$static, display);
}

function $setNextPageButtonsDisabled(this$static, disabled){
  $setDisabled_0(this$static.nextPage, disabled);
  !!this$static.lastPage && $setDisabled_0(this$static.lastPage, disabled);
}

function $setPrevPageButtonsDisabled(this$static, disabled){
  $setDisabled_0(this$static.firstPage, disabled);
  $setDisabled_0(this$static.prevPage, disabled);
}

defineSeed(543, 516, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]));
_.setPageStart = function setPageStart(index){
  $setPageStart(this, index);
}
;
_.fastForwardRows = 0;
_.firstPage = null;
_.lastPage = null;
_.nextPage = null;
_.prevPage = null;
_.style_0 = null;
function SimplePager$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(544, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SimplePager$1_0);
_.onClick = function onClick_0(event_0){
  $setPage(this.this$0, 0);
}
;
_.this$0 = null;
function SimplePager$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(545, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SimplePager$2_0);
_.onClick = function onClick_1(event_0){
  $nextPage(this.this$0);
}
;
_.this$0 = null;
function SimplePager$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(546, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SimplePager$3_0);
_.onClick = function onClick_2(event_0){
  $previousPage(this.this$0);
}
;
_.this$0 = null;
function SimplePager$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(547, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), SimplePager$4_0);
_.onClick = function onClick_3(event_0){
  $lastPage(this.this$0);
}
;
_.this$0 = null;
function $setDisabled_0(this$static, isDisabled){
  if (this$static.disabled_0 == isDisabled) {
    return;
  }
  this$static.disabled_0 = isDisabled;
  if (this$static.disabled_0) {
    $setResource(this$static, this$static.resDisabled);
    $addClassName($getParentElement(this$static.element), this$static.styleDisabled);
  }
   else {
    $setResource(this$static, this$static.resEnabled);
    $removeClassName($getParentElement(this$static.element), this$static.styleDisabled);
  }
  $clinit_Roles();
  $setAriaDisabledState(this$static.element, this$static.disabled_0);
}

function SimplePager$ImageButton_0(resEnabled, resDiabled, label){
  $clinit_Image();
  Image_2.call(this, resEnabled);
  this.resEnabled = resEnabled;
  this.resDisabled = resDiabled;
  this.styleDisabled = 'GK40RFKDFI';
  $clinit_Roles();
  $set(BUTTON, this.element);
  $setAriaLabelProperty(this.element, label);
}

defineSeed(548, 340, makeCastMap([Q$HasMouseDownHandlers, Q$HasMouseMoveHandlers, Q$HasMouseOutHandlers, Q$HasMouseUpHandlers, Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$Image, Q$IsWidget, Q$UIObject, Q$Widget]), SimplePager$ImageButton_0);
_.onBrowserEvent_0 = function onBrowserEvent_9(event_0){
  if (this.disabled_0) {
    return;
  }
  $onBrowserEvent_1(this, event_0);
}
;
_.disabled_0 = false;
_.resDisabled = null;
_.resEnabled = null;
_.styleDisabled = null;
var simplePagerFirstPage = null, simplePagerFirstPageDisabled = null, simplePagerLastPage = null, simplePagerLastPageDisabled = null, simplePagerNextPage = null, simplePagerNextPageDisabled = null, simplePagerPreviousPage = null, simplePagerPreviousPageDisabled = null, simplePagerStyle = null;
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GK40RFKDGI{padding:4px 8px;text-align:center;}.GK40RFKDEI{padding:4px;cursor:pointer;cursor:hand;}.GK40RFKDFI{cursor:default;}');
    schedule_0();
    return true;
  }
  return false;
}

function SimplePager_Resources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(550, 1, {}, SimplePager_Resources_default_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerFirstPageDisabledInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerFirstPageDisabledInitializer = nullMethod;
  simplePagerFirstPageDisabled = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABTUlEQVR42r2UO26EQAyGOQtnyVlyllTQcADqUIA4A1Cl5QLQ8H4/Smf/0Xo1M7CskmKRRiPM7w/bY49hvOPZ9/1zXVea55mmaRI73mH/C8RcloW6rqOyLA8LdnyH7hXoYxxH4dS2LfV9f1iw4zt00D+FIR0IzyD6KopCpH8KQj2qqhJpQJwkCYVheIDEcSx26KCH3wE2DAPVdf1w0mFN01AQBGRZ1sMGPfwU0LZtXxDLEciwPM/JdV0BkmH8E/jLKXZ6rRiWpik5jkO2bZ/C7ql2CgxGHeZ5ngAx5AyGIBTYLcxvuV5caESWZZlI8Soy+CuNyj2kw9jB9/0DjPWHBsa4yHXTTxOtEEWRAkOvwe+0+/m4r/oMByLrns7qLfcfbsar7ufmhv5yPlFMnk95IvgnsKNRlaK/ujkwJpg9BmHH+/0aMv97r5m8jHc+v9PgJIofYq0vAAAAAElFTkSuQmCC'))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerFirstPageInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerFirstPageInitializer = nullMethod;
  simplePagerFirstPage = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACAUlEQVR42r2UO08CQRSF+S3+FQUTY2xNbEwsTLDRYGGMdgZjY9TWgkRLY2VhqQgB4iMGUESRh8C+WB6uBDVCcZ0zuwysKBoKN5nMznDOx51776zD8R9PpVo/kLUa5aUyPRV1PmON/b9DjMZIUalSIiVTKCqRP16m05jOZ6yxj9+h6w+qNTYy+RIFozKFU290kW3ZxmWuxffxO3TQfwsyjPehXEGnQFRlxqYFaNpAWGPGOGM66OHrgSEfkbhE5xkTsL6zT3Oe1R7g+paPv0MHPXw9UaVzGgXv6sLYhrUjCSZfyL2wTMNOl4gaevhs0emVl6vrhCSMEHsBW1zl78fhLE1OTZOTgTC4zvpT+OAXMLX0TJGYZMsNInN7Vsh3eEpj4xPkdI3yqLojAxBHhV/AFLYIxRVb5QCbcXtMkBVRB9YUuQzFZFK6YaWyUbu4lbtgTfJu7/GcHQVT5hFdLgG1VfpGJvgFrGrUZ+/TCoVSrwLo3TaPiXf/TY3c80tfImtxfZL54LdVtCBXKBDTOi1g5axdlPPMB61t7nZFZvYafN92/0NapUDiuVPNL32G4Ts84XDooP/xrmq6we6ewo5V7el80f382Obdhb7v/UQy008aq5LETZHHdw7FjHWY7aNRbUn/7cuhsGuSLZToIaNS8lHmM9bY//WL0Q+Mag0MGPT5BMCM9a9Um499AAAAAElFTkSuQmCC'))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerLastPageDisabledInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerLastPageDisabledInitializer = nullMethod;
  simplePagerLastPageDisabled = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABR0lEQVR42r2UOY6DQBBFOQtnmbPMWSaChAMQj5BAnAGInHIBSNj3JSz7t6YsoNvGnsBIJUz3/89UUdWa9olrXdfveZ5pHEcahkHc8Yz1dyD6NE3UNA3leS4F1rEP3Rnoq+97Yarrmtq2lQLr2IcO+ocwpJNlmRJyDAChV4JQD04D4jAMJYDv+xRFkfgNXVEUoo4SrOs6KsvybjQMgzzPo6qqlDAE9PDtQMuy/GxNDEPYtk1pmiphCPjg36bYIEUVDGFZFsVxLGDH9OGD/2UYAx3Hkd5Mgt1e8xfFVMFM0xSpJkmiTBM++HeNyj10hLmuS/xHxzRZLzUwxmWbKkBBENxbRfUBoIdPOYv8uXFHwZ/1GeseTsEt9wvP5Fn3Qwf90/lEMdGIMKBWnOZ28LG/K/rZyYExwewxCHc8/x1D+n/PNZ1D++R1BRuAJHUT4bDpAAAAAElFTkSuQmCC'))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerLastPageInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerLastPageInitializer = nullMethod;
  simplePagerLastPage = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB/UlEQVR42r2UTS8DQRjHfRZfhZKQuEocOEgkehDhIMFJonGRcHXowVGcJK5Uq+otaKWqtW2pfWm33do2qHB4zH/WzHa1KXGwyWR2Zp//L8/rdnX9x1Ox6ltasUoPapnuH02+44z730Ps595H3aJkRqNoXKNQokz7cZPvOOMe32HXGVR9Xsk+lChypdFR5pVOcx+edZb/oCi7P2TfYQf7tiDbbnTnCyYdXBrfIO9yB0zs4SuDYA9dCwz5iMVVOsk64sBa8AvkQvwzixRY3+Rn2MUSKs9ji1dKvkjhm5oU+nx95J+ep0iqJr0TMOEp7KHzeGdWaucXSZWDBKyHwQAcHhml3Wi2DcxZ0EEvYUbpiYfogFzPBHBgcIiC2/sMtkDLa14YdNBLmM4OKHtz0n1fIAEFcNw/K3MmIoBOb4aVynb19FrzVE945evrZ6GO0U4kQ5PwjIf57kbBdNBLmGXXJ1KKznuoGYY1OTVHoWuLi5EzJ0zHJpp+oVumg95T0YJW4b0jmhNeLa1u0LHyJsXwLLDuwsLxIkHXdhbTWYPCSZsbBrf3Whq3uZqwSysGm4J6+ykomjafvVCiIvPiVth9x3fYwb7jfCKZaMQjDDnLVUxpOC1w12AQi92rvFE9Sf/pz6GzMckVSoTQU3ca33NsFnH/4x+jExjV+jPgr88n1kL1nJCdAj4AAAAASUVORK5CYII='))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerNextPageDisabledInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerNextPageDisabledInitializer = nullMethod;
  simplePagerNextPageDisabled = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABNUlEQVR42r2UOY6EQAxFOQtnmbPMWTqChAMQdwKHgGxSyBFCYt+X0N0fjSVoVw3qCRrJQlT9/yhbdhnGJ55t276XZaFpmmgcx/2Nb6y/AzHneaa2bakoChFYxz50V6CvYRh2U9M01HWdCKzneU7QQa+FIR2AVJDXgA56JQj1KMtyT+NoCsNQCYMOevgEDMeuqkqYbNsm3/eprmuxB33f92fYuq43lRhhWdYerutSmqZiHz74jym2uloxDCd0HIeiKBK1g/8t2BGYZZke9jzmHcW8giHVJElE3eA/NSr3kA7meR69/pD1ooExLqpUAQqCQLQMpwifchb52EdDHMfK9FmnnYJn7j/cjFfdDx30f84niolGhOE4EfwTrGP/VPSrmwNjgtljEN74/r2GzP/eayaH8cnnAW4+L0Ycj6d3AAAAAElFTkSuQmCC'))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerNextPageInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerNextPageInitializer = nullMethod;
  simplePagerNextPage = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB80lEQVR42r2UPU/bUBSG+S39K5AgAWJF6tINCRbYqq4dqi5IzAx0r8rAUnVLMA1RAyr5IKQJ+YBgO47jGGNRUJPh7X0v8ZUviULFUEtHV/ee9zw+vuccz8z8j8frh58tx8eV2cPltStX7nn+75Dgbu7a7qNcs5ApWEgXe0gVXLlyz3P6qZsO8u8+Nq66OMxbOKrd47g1RK45GNlQGs8PT01QR/1EUBA8vGq1XRj5zggyVBDuj5tDBaQZeQfUM24MxvvIFk38aAy0bD5sf1JABRZGHfWMG8uqfunAOL/V3k5gIjmP9c13+F4Jn/hEduch6i1Hz871bk9+lk3tbiKbTSSlrbx+g69HDS1LGuMYr2Cd7g2yBTMmHIzBEskkFpaWsfslpRWGcYxXMFtsWPYIEL8fCVLAeSwsLuNbri1B9DPOjsO6vcDPlcZhUWaJkfFT942qVojcmQXGK1g/CFcrdRuZ2m+tHeKfubbxFumSr/kyoud+iTjGaxVtW57ssUmZvd/aEa3wR1U48hsFB4ybOIvVegdG+SbWZwPs7qX05o1AQke954eTp8BxAzF7Ng5KfS27p5+eLnpSR/3U+eRlshEzouRpAc1ePDy2gFi55zn92qU/9+ewxZg0211UGx1ULiy5NsUs8vzZP8Y0MKv1YsBLn78yFAmErQgG1AAAAABJRU5ErkJggg=='))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerPreviousPageDisabledInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerPreviousPageDisabledInitializer = nullMethod;
  simplePagerPreviousPageDisabled = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABOElEQVR42r1UO66DMBDkLJwlZ3lneRU0HID6NXAI6NJCjxAS//+n3GRQLMX2Ql5SxNLKsj0z8q5nbRjfGNu2/SzLQtM00TiO+4w19t8RMed5prZtqSgKLbCPc+BeCV2GYaA8z6lpGuq6TgvsQxQ44A/FkA6AnIgawAHPCqEeZVnuaXDkMAylNXDAg6eJ9X1PVVVpInVdk+/7ZNu2dgY80pWE1nX9BUkFp2lKruuSZVl7cDcGD/znFFu1VlEUkeM4+43OxMAD/1AsyzJN6N9i92v+qfVKkkRK8UgMjwC+ZFThIRXoed6hmMBrBka7cB6DBYIgYMWAB491v3huLp04jjVbPG7F9+o996voyTP3C3MDf9qfKCYMDMHnjhCOxz7OpaK/+jnQJug9IYQZ68c3ZH76r5kijG+OGyVGL0Z2EQ8bAAAAAElFTkSuQmCC'))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerPreviousPageInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerPreviousPageInitializer = nullMethod;
  simplePagerPreviousPage = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB8klEQVR42r1UPU/bUBTlt/BX2qRSilgrsXSrVBbYqq4MFQtSZ4awV2XogtgSTENEQG0+CCEhjvNhO47zgbEoiGQ4feclMXYSAmLA0tXTfT7n+Lx73/XCwms8na77w7B6qOltVBu2XJlz//kizs3bhtlFvmQgkTEQz7YRy9hyZc59viduvlDvZlOttXD4V8dR6RapymAUfRkn2kDuH6YNEEf8TCHHuVvU6jaUtOUTGeCEoflFh7mSboJ48qbEWI9kVsexOnQwFhiv377vBFwSRzx5U67KmgXl3A24YvwuuFhd/4pQ+J3nbBzK+TXKVSvozu5cn/7J6w9HG7nZO1LxYeUj3oTCMiY/RHHyyPfEmq0rJDN6oNDRnzFElpaFo/AMsb73QfLI98RMkbDtQ0Af+6k6Iu+X5dEoEhqJTdaRQZ7pF2u1nV7qzAgU/pdSlEcM+cQmyyAjZ4B8T6zruJ8uyiYSo7s1BsdzPXxe+xI4pv+aJEr/UBA88gMdrRsdKBnLRxh27li9x8bW9kxnvGvkzbj97max3ISSv/IIfhfR3ZjXIAZxxD86q5btiNkzxRx2po7kd3WQ60oc8XPnk8XkBU6IlscFKXl5J8W4Muc+3weK/tSfwxRjUhGzV1SbKFwacq3UW+D+k3+MecLs1osFXvr8B7ptCYR7x7UcAAAAAElFTkSuQmCC'))), 19, 19);
}

function $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerStyleInitializer(){
  $clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerStyleInitializer = nullMethod;
  simplePagerStyle = new SimplePager_Resources_default_InlineClientBundleGenerator$1_0;
}

function TextColumn_0(){
  Column_0.call(this, new TextCell_0);
}

defineSeed(560, 524, makeCastMap([Q$HasCell, Q$Column]));
function TextHeader_0(text){
  Header_0.call(this, new TextCell_0);
  this.text_0 = text;
}

defineSeed(561, 539, makeCastMap([Q$Header]), TextHeader_0);
_.text_0 = null;
function $addValueChangeHandler_0(this$static, handler){
  if (!this$static.valueChangeHandlerInitialized) {
    this$static.ensureDomEventHandlers();
    this$static.valueChangeHandlerInitialized = true;
  }
  return $addHandler_3(this$static, handler, (!TYPE_22 && (TYPE_22 = new GwtEvent$Type_0) , TYPE_22));
}

defineSeed(618, 613, makeCastMap([Q$HasMouseDownHandlers, Q$HasMouseMoveHandlers, Q$HasMouseOutHandlers, Q$HasMouseUpHandlers, Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$CheckBox, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.ensureDomEventHandlers = function ensureDomEventHandlers(){
  $addDomHandler(this, new CheckBox$1_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
function CheckBox$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(619, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), CheckBox$1_0);
_.onClick = function onClick_4(event_0){
  fire_7(this.this$0, $getValue_0(this.this$0));
}
;
_.this$0 = null;
function $removeAutoHidePartner(this$static, partner){
  !!this$static.autoHidePartners && this$static.autoHidePartners.remove_2(partner);
}

defineSeed(687, 447, makeCastMap([Q$Collection, Q$List]));
_.clear = function clear_3(){
  this.removeRange(0, this.size_1());
}
;
_.removeRange = function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = new AbstractList$ListIteratorImpl_0(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    $next_5(iter);
    $remove_20(iter);
  }
}
;
_.subList = function subList(fromIndex, toIndex){
  return new AbstractList$SubList_0(this, fromIndex, toIndex);
}
;
function $removeRange(this$static, fromIndex, endIndex){
  var count;
  checkIndex(fromIndex, this$static.size_0);
  (endIndex < fromIndex || endIndex > this$static.size_0) && indexOutOfBounds(endIndex, this$static.size_0);
  count = endIndex - fromIndex;
  splice(this$static.array, fromIndex, count);
  this$static.size_0 -= count;
}

defineSeed(686, 687, makeCastMap([Q$Serializable, Q$Collection, Q$List, Q$RandomAccess]));
_.addAll = function addAll_0(c){
  return $addAll_0(this, c);
}
;
_.removeRange = function removeRange_0(fromIndex, endIndex){
  $removeRange(this, fromIndex, endIndex);
}
;
function $isItemSelected(this$static, index){
  $checkIndex(this$static, index);
  return !!this$static.element.options[index].selected;
}

function $setScheduledCommand(this$static, cmd){
  this$static.command = cmd;
}

defineSeed(710, 1, {});
function $add_14(this$static, suggestion){
  var candidate, i, l_0, word, words;
  candidate = $normalizeSuggestion(this$static, suggestion);
  this$static.toRealSuggestions.put(candidate, suggestion);
  words = $split(candidate, ' ', 0);
  for (i = 0; i < words.length; ++i) {
    word = words[i];
    $add_15(this$static.tree, word);
    l_0 = dynamicCast(this$static.toCandidates.get_0(word), Q$Set);
    if (!l_0) {
      l_0 = new HashSet_0;
      this$static.toCandidates.put(word, l_0);
    }
    l_0.add_0(candidate);
  }
}

function $convertToFormattedSuggestions(this$static, query, candidates){
  var accum, candidate, cursor, formattedSuggestion, i, index, part1, part2, searchWords, suggestion, suggestions, wordBounds;
  suggestions = new ArrayList_0;
  for (i = 0; i < candidates.size_0; ++i) {
    candidate = (checkIndex(i, candidates.size_0) , dynamicCast(candidates.array[i], Q$String));
    cursor = 0;
    index = 0;
    formattedSuggestion = dynamicCast(this$static.toRealSuggestions.get_0(candidate), Q$String);
    accum = new SafeHtmlBuilder_0;
    searchWords = $split(query, ' ', 0);
    while (true) {
      wordBounds = $findNextWord(candidate, searchWords, index);
      if (!wordBounds) {
        break;
      }
      if (wordBounds.startIndex == 0 || 32 == $charAt(candidate, wordBounds.startIndex - 1)) {
        part1 = $substring_0(formattedSuggestion, cursor, wordBounds.startIndex);
        part2 = $substring_0(formattedSuggestion, wordBounds.startIndex, wordBounds.endIndex);
        cursor = wordBounds.endIndex;
        $append_7(accum.sb, htmlEscape(part1));
        $append_7(accum.sb, '<strong>');
        $append_7(accum.sb, htmlEscape(part2));
        $append_7(accum.sb, '<\/strong>');
      }
      index = wordBounds.endIndex;
    }
    if (cursor == 0) {
      continue;
    }
    $appendEscaped(accum, $substring(formattedSuggestion, cursor));
    suggestion = new MultiWordSuggestOracle$MultiWordSuggestion_0(formattedSuggestion, (new SafeHtmlString_0($toString_0(accum.sb.data_0))).html);
    setCheck(suggestions.array, suggestions.size_0++, suggestion);
  }
  return suggestions;
}

function $createCandidatesFromSearch(this$static, query){
  var candidateSet, candidates, i, searchWords, thisWordChoices, word;
  candidates = new ArrayList_0;
  if (query.length == 0) {
    return candidates;
  }
  searchWords = $split(query, ' ', 0);
  candidateSet = null;
  for (i = 0; i < searchWords.length; ++i) {
    word = searchWords[i];
    if (word.length == 0 || $matches(word, ' ')) {
      continue;
    }
    thisWordChoices = $createCandidatesFromWord(this$static, word);
    if (!candidateSet) {
      candidateSet = thisWordChoices;
    }
     else {
      $retainAll(candidateSet, thisWordChoices);
      if (candidateSet.map.size_1() < 2) {
        break;
      }
    }
  }
  if (candidateSet) {
    $addAll_0(candidates, candidateSet);
    sort_1(candidates, null);
  }
  return candidates;
}

function $createCandidatesFromWord(this$static, query){
  var belongsTo, candidateSet, i, words;
  candidateSet = new HashSet_0;
  words = $getSuggestions(this$static.tree, query, 2147483647);
  if (words) {
    for (i = 0; i < words.size_0; ++i) {
      belongsTo = dynamicCast(this$static.toCandidates.get_0((checkIndex(i, words.size_0) , words.array[i])), Q$Collection);
      !!belongsTo && $addAll(candidateSet, belongsTo);
    }
  }
  return candidateSet;
}

function $findNextWord(candidate, searchWords, indexToStartAt){
  var firstWord, index, newWord, word, word$index, word$max;
  firstWord = null;
  for (word$index = 0 , word$max = searchWords.length; word$index < word$max; ++word$index) {
    word = searchWords[word$index];
    index = candidate.indexOf(word, indexToStartAt);
    if (index != -1) {
      newWord = new MultiWordSuggestOracle$WordBounds_0(index, word.length);
      (!firstWord || $compareTo_3(newWord, firstWord) < 0) && (firstWord = newWord);
    }
  }
  return firstWord;
}

function $normalizeSearch(this$static, search){
  search = $normalizeSuggestion(this$static, search);
  search = $replaceAll(search, '\\s+', ' ');
  return $trim(search);
}

function $normalizeSuggestion(this$static, formattedSuggestion){
  var i, ignore;
  formattedSuggestion = formattedSuggestion.toLowerCase();
  if (this$static.whitespaceChars != null) {
    for (i = 0; i < this$static.whitespaceChars.length; ++i) {
      ignore = this$static.whitespaceChars[i];
      formattedSuggestion = $replace_1(formattedSuggestion, ignore, 32);
    }
  }
  return formattedSuggestion;
}

function $requestDefaultSuggestions(this$static, callback){
  $onSuggestionsReady(callback, this$static.emptyResponse);
}

function $requestSuggestions(this$static, request, callback){
  var candidates, i, limit, query, response, suggestions;
  query = $normalizeSearch(this$static, request.query);
  limit = request.limit;
  candidates = $createCandidatesFromSearch(this$static, query);
  for (i = candidates.size_0 - 1; i > limit; --i) {
    candidates.remove_3(i);
  }
  suggestions = $convertToFormattedSuggestions(this$static, query, candidates);
  response = new SuggestOracle$Response_0(suggestions);
  $onSuggestionsReady(callback, response);
}

function MultiWordSuggestOracle_0(){
  MultiWordSuggestOracle_1.call(this);
}

function MultiWordSuggestOracle_1(){
  var i;
  this.emptyResponse = new SuggestOracle$Response_0(new ArrayList_0);
  this.tree = new PrefixTree_0;
  this.toCandidates = new HashMap_0;
  this.toRealSuggestions = new HashMap_0;
  this.whitespaceChars = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 1, 1);
  for (i = 0; i < 1; ++i) {
    this.whitespaceChars[i] = ' '.charCodeAt(i);
  }
}

defineSeed(709, 710, {}, MultiWordSuggestOracle_0);
_.whitespaceChars = null;
function MultiWordSuggestOracle$MultiWordSuggestion_0(replacementString, displayString){
  this.replacementString = replacementString;
  this.displayString = displayString;
}

defineSeed(711, 1, makeCastMap([Q$SuggestOracle$Suggestion]), MultiWordSuggestOracle$MultiWordSuggestion_0);
_.displayString = null;
_.replacementString = null;
function $compareTo_3(this$static, that){
  var comparison;
  comparison = this$static.startIndex - that.startIndex;
  comparison == 0 && (comparison = that.endIndex - this$static.endIndex);
  return comparison;
}

function MultiWordSuggestOracle$WordBounds_0(startIndex, length_0){
  this.startIndex = startIndex;
  this.endIndex = startIndex + length_0;
}

defineSeed(712, 1, makeCastMap([Q$MultiWordSuggestOracle$WordBounds, Q$Comparable]), MultiWordSuggestOracle$WordBounds_0);
_.compareTo$ = function compareTo_3(that){
  return $compareTo_3(this, dynamicCast(that, Q$MultiWordSuggestOracle$WordBounds));
}
;
_.endIndex = 0;
_.startIndex = 0;
function $addValueChangeHandler_1(this$static, handler){
  if (!this$static.valueChangeHandlerInitialized) {
    this$static.valueChangeHandlerInitialized = true;
    $addDomHandler(this$static, new ValueBoxBase$1_0(this$static), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  }
  return $addHandler_3(this$static, handler, (!TYPE_22 && (TYPE_22 = new GwtEvent$Type_0) , TYPE_22));
}

function $add_15(this$static, s){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (s == null || s.length == 0) {
    return false;
  }
  if (s.length <= prefixLength) {
    var safeKey = ':' + s;
    if (suffixes.hasOwnProperty(safeKey)) {
      return false;
    }
     else {
      this$static.size_0++;
      suffixes[safeKey] = true;
      return true;
    }
  }
   else {
    var prefix = ':' + s.slice(0, prefixLength);
    var theTree;
    if (subtrees.hasOwnProperty(prefix)) {
      theTree = subtrees[prefix];
    }
     else {
      theTree = new PrefixTree_1(prefixLength << 1);
      subtrees[prefix] = theTree;
    }
    var slice = s.slice(prefixLength);
    if (theTree.add_3(slice)) {
      this$static.size_0++;
      return true;
    }
     else {
      return false;
    }
  }
}

function $contains(this$static, s){
  return $indexOf_0($getSuggestions(this$static, s, 1), s, 0) != -1;
}

function $getSuggestions(this$static, search, limit){
  var toReturn;
  toReturn = new ArrayList_0;
  search != null && limit > 0 && $suggestImpl(this$static, search, '', toReturn, limit);
  return toReturn;
}

function $suggestImpl(this$static, search, prefix, output, limit){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (search.length > prefix.length + prefixLength) {
    var key = ':' + search.slice(prefix.length, prefix.length + prefixLength);
    if (subtrees.hasOwnProperty(key)) {
      var subtree = subtrees[key];
      var target = prefix + $substring(key, 1);
      subtree.suggestImpl(search, target, output, limit);
    }
  }
   else {
    for (var suffix in suffixes) {
      if (suffix.indexOf(':') != 0) {
        continue;
      }
      var target = prefix + $substring(suffix, 1);
      target.indexOf(search) == 0 && output.add_0(target);
      if (output.size_1() >= limit) {
        return;
      }
    }
    for (var key in subtrees) {
      if (key.indexOf(':') != 0) {
        continue;
      }
      var target = prefix + $substring(key, 1);
      var subtree = subtrees[key];
      if (target.indexOf(search) == 0) {
        if (subtree.size_0 <= limit - output.size_1() || subtree.size_0 == 1) {
          subtree.dump_0(output, target);
        }
         else {
          for (var suffix in subtree.suffixes) {
            suffix.indexOf(':') == 0 && output.add_0(target + $substring(suffix, 1));
          }
          for (var subkey in subtree.subtrees_0) {
            subkey.indexOf(':') == 0 && output.add_0(target + $substring(subkey, 1) + '...');
          }
        }
      }
    }
  }
}

function PrefixTree_0(){
  PrefixTree_2.call(this, 2);
}

function PrefixTree_1(prefixLength){
  PrefixTree_2.call(this, prefixLength);
}

function PrefixTree_2(prefixLength){
  this.prefixLength = prefixLength;
  this.size_0 = 0;
  this.subtrees_0 = {};
  this.suffixes = {};
}

function safe_0(s){
  return ':' + s;
}

function unsafe_0(s){
  return $substring(s, 1);
}

defineSeed(726, 447, makeCastMap([Q$Collection]), PrefixTree_0, PrefixTree_1);
_.add_0 = function add_22(s){
  return $add_15(this, dynamicCast(s, Q$String));
}
;
_.add_3 = function add_23(s){
  return $add_15(this, s);
}
;
_.contains_0 = function contains_2(o){
  return instanceOf(o, Q$String) && $contains(this, dynamicCast(o, Q$String));
}
;
_.dump_0 = function dump_0(output, prefix){
  var s, s$iterator;
  for (s$iterator = new PrefixTree$PrefixTreeIterator_0(this); $nextImpl(s$iterator, true) != null;) {
    s = $next_1(s$iterator);
    output.add_0(prefix + s);
  }
}
;
_.iterator_0 = function iterator_11(){
  return new PrefixTree$PrefixTreeIterator_0(this);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.suggestImpl = function suggestImpl(search, prefix, output, limit){
  $suggestImpl(this, search, prefix, output, limit);
}
;
_.prefixLength = 0;
_.size_0 = 0;
_.subtrees_0 = null;
_.suffixes = null;
function $addTree(this$static, tree, prefix){
  var suffixes = [];
  for (var suffix in tree.suffixes) {
    suffix.indexOf(':') == 0 && suffixes.push(suffix);
  }
  var frame = {suffixNames:suffixes, subtrees:tree.subtrees_0, prefix:prefix, index:0};
  var stack = this$static.stack;
  stack.push(frame);
}

function $next_1(this$static){
  var toReturn;
  toReturn = $nextImpl(this$static, false);
  if (toReturn == null) {
    if ($nextImpl(this$static, true) != null) {
      throw new RuntimeException_0('nextImpl() returned null, but hasNext says otherwise');
    }
     else {
      throw new NoSuchElementException_1('No more elements in the iterator');
    }
  }
  return toReturn;
}

function $nextImpl(this$static, peek){
  var stack = this$static.stack;
  var safe = safe_0;
  var unsafe = unsafe_0;
  while (stack.length > 0) {
    var frame = stack.pop();
    if (frame.index < frame.suffixNames.length) {
      var toReturn = frame.prefix + unsafe(frame.suffixNames[frame.index]);
      !peek && frame.index++;
      if (frame.index < frame.suffixNames.length) {
        stack.push(frame);
      }
       else {
        for (key in frame.subtrees) {
          if (key.indexOf(':') != 0) {
            continue;
          }
          var target = frame.prefix + unsafe(key);
          var subtree = frame.subtrees[key];
          this$static.addTree(subtree, target);
        }
      }
      return toReturn;
    }
     else {
      for (var key in frame.subtrees) {
        if (key.indexOf(':') != 0) {
          continue;
        }
        var target = frame.prefix + unsafe(key);
        var subtree = frame.subtrees[key];
        this$static.addTree(subtree, target);
      }
    }
  }
  return null;
}

function PrefixTree$PrefixTreeIterator_0(tree){
  this.stack = [];
  $addTree(this, tree, '');
}

defineSeed(727, 1, {}, PrefixTree$PrefixTreeIterator_0);
_.addTree = function addTree(tree, prefix){
  $addTree(this, tree, prefix);
}
;
_.hasNext = function hasNext_3(){
  return $nextImpl(this, true) != null;
}
;
_.next_0 = function next_4(){
  return $next_1(this);
}
;
_.remove_1 = function remove_24(){
  throw new UnsupportedOperationException_1('PrefixTree does not support removal.  Use clear()');
}
;
_.stack = null;
defineSeed(729, 618, makeCastMap([Q$HasMouseDownHandlers, Q$HasMouseMoveHandlers, Q$HasMouseOutHandlers, Q$HasMouseUpHandlers, Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$CheckBox, Q$FocusWidget, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.ensureDomEventHandlers = function ensureDomEventHandlers_0(){
}
;
function $refreshSuggestions(this$static){
  var text;
  text = $getPropertyString(this$static.box.element, 'value');
  if ($equals_4(text, this$static.currentText)) {
    return;
  }
   else {
    this$static.currentText = text;
  }
  text.length == 0?$requestDefaultSuggestions(this$static.oracle, (new SuggestOracle$Request_0(null) , this$static.callback)):$requestSuggestions(this$static.oracle, new SuggestOracle$Request_0(text), this$static.callback);
}

function $setNewSelection(this$static, curSuggestion){
  this$static.currentText = curSuggestion.replacementString;
  $setText_7(this$static, this$static.currentText);
  this$static.display_0.suggestionPopup.hide_0();
  fire_5(this$static, curSuggestion);
}

function $setText_7(this$static, text){
  $setText_6(this$static.box, text);
}

function SuggestBox_0(oracle){
  SuggestBox_1.call(this, oracle, new TextBox_0);
}

function SuggestBox_1(oracle, box){
  SuggestBox_2.call(this, oracle, box, new SuggestBox$DefaultSuggestionDisplay_0);
}

function SuggestBox_2(oracle, box, suggestDisplay){
  var events;
  this.callback = new SuggestBox$1_0(this);
  this.suggestionCallback = new SuggestBox$2_0(this);
  this.box = box;
  this.display_0 = suggestDisplay;
  $initWidget(this, box);
  events = new SuggestBox$1TextBoxEvents_0(this);
  $addKeyHandlersTo(events, this.box);
  $addValueChangeHandler_1(this.box, events);
  this.oracle = oracle;
  this.element['className'] = 'gwt-SuggestBox';
}

defineSeed(743, 500, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]), SuggestBox_0);
_.addKeyDownHandler = function addKeyDownHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
}
;
_.addKeyPressHandler = function addKeyPressHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_4));
}
;
_.addKeyUpHandler = function addKeyUpHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
}
;
_.setFocus = function setFocus_4(focused){
  $setFocus(this.box, focused);
}
;
_.setText = function setText_8(text){
  $setText_7(this, text);
}
;
_.box = null;
_.currentText = null;
_.display_0 = null;
_.oracle = null;
function $onSuggestionsReady(this$static, response){
  if (this$static.this$0.box.element['disabled']) {
    return;
  }
  $showSuggestions(this$static.this$0.display_0, this$static.this$0, response.suggestions, this$static.this$0.suggestionCallback);
}

function SuggestBox$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(744, 1, {}, SuggestBox$1_0);
_.this$0 = null;
function SuggestBox$1TextBoxEvents_0(this$0){
  this.this$0 = this$0;
}

defineSeed(745, 278, makeCastMap([Q$KeyDownHandler, Q$KeyPressHandler, Q$KeyUpHandler, Q$ValueChangeHandler, Q$EventHandler]), SuggestBox$1TextBoxEvents_0);
_.onKeyDown = function onKeyDown_0(event_0){
  var suggestion;
  switch (event_0.nativeEvent.keyCode || 0) {
    case 40:
      $moveSelectionDown_0(this.this$0.display_0);
      break;
    case 38:
      $moveSelectionUp_0(this.this$0.display_0);
      break;
    case 13:
    case 9:
      suggestion = $getCurrentSelection(this.this$0.display_0);
      !suggestion?this.this$0.display_0.suggestionPopup.hide_0():$setNewSelection(this.this$0, suggestion);
  }
  $delegateEvent(this.this$0, event_0);
}
;
_.onKeyPress = function onKeyPress_0(event_0){
  $delegateEvent(this.this$0, event_0);
}
;
_.onKeyUp = function onKeyUp_1(event_0){
  $refreshSuggestions(this.this$0);
  $delegateEvent(this.this$0, event_0);
}
;
_.onValueChange = function onValueChange_0(event_0){
  $delegateEvent(this.this$0, event_0);
}
;
_.this$0 = null;
function $onSuggestionSelected(this$static, suggestion){
  $setNewSelection(this$static.this$0, suggestion);
}

function SuggestBox$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(746, 1, {}, SuggestBox$2_0);
_.this$0 = null;
defineSeed(748, 1, {});
function $getCurrentSelection(this$static){
  var item;
  if (!this$static.suggestionPopup.showing) {
    return null;
  }
  item = this$static.suggestionMenu.selectedItem;
  return !item?null:dynamicCast(item, Q$SuggestBox$SuggestionMenuItem).suggestion;
}

function $moveSelectionDown_0(this$static){
  this$static.suggestionPopup.showing && $selectItem_0(this$static.suggestionMenu, $getSelectedItemIndex(this$static.suggestionMenu) + 1);
}

function $moveSelectionUp_0(this$static){
  this$static.suggestionPopup.showing && ($getSelectedItemIndex(this$static.suggestionMenu) == -1?$selectItem_0(this$static.suggestionMenu, this$static.suggestionMenu.items.size_0 - 1):$selectItem_0(this$static.suggestionMenu, $getSelectedItemIndex(this$static.suggestionMenu) - 1));
}

function $showSuggestions(this$static, suggestBox, suggestions, callback){
  var anySuggestions, curSuggestion, curSuggestion$iterator, menuItem;
  anySuggestions = !!suggestions && suggestions.size_0 > 0;
  if (!anySuggestions) {
    this$static.suggestionPopup.hide_0();
    return;
  }
  this$static.suggestionPopup.attached && this$static.suggestionPopup.hide_0();
  $clearItems(this$static.suggestionMenu);
  for (curSuggestion$iterator = new AbstractList$IteratorImpl_0(suggestions); curSuggestion$iterator.i < curSuggestion$iterator.this$0_0.size_1();) {
    curSuggestion = dynamicCast($next_5(curSuggestion$iterator), Q$SuggestOracle$Suggestion);
    menuItem = new SuggestBox$SuggestionMenuItem_0(curSuggestion);
    $setScheduledCommand(menuItem, new SuggestBox$DefaultSuggestionDisplay$1_0(callback, curSuggestion));
    $addItem_0(this$static.suggestionMenu, menuItem);
  }
  anySuggestions && $selectItem_0(this$static.suggestionMenu, 0);
  if (this$static.lastSuggestBox != suggestBox) {
    !!this$static.lastSuggestBox && $removeAutoHidePartner(this$static.suggestionPopup, this$static.lastSuggestBox.element);
    this$static.lastSuggestBox = suggestBox;
    $addAutoHidePartner(this$static.suggestionPopup, suggestBox.element);
  }
  $showRelativeTo(this$static.suggestionPopup, suggestBox);
}

function SuggestBox$DefaultSuggestionDisplay_0(){
  var p_0;
  this.suggestionMenu = new SuggestBox$SuggestionMenu_0;
  this.suggestionPopup = (p_0 = new DecoratedPopupPanel_0(true, false, 'suggestPopup') , $getParentElement($getFirstChildElement(p_0.element))['className'] = 'gwt-SuggestBoxPopup' , p_0.previewAllNativeEvents = true , p_0.animType = 2 , p_0);
  $setWidget_3(this.suggestionPopup, this.suggestionMenu);
}

defineSeed(747, 748, {}, SuggestBox$DefaultSuggestionDisplay_0);
_.lastSuggestBox = null;
_.suggestionMenu = null;
_.suggestionPopup = null;
function SuggestBox$DefaultSuggestionDisplay$1_0(val$callback, val$curSuggestion){
  this.val$callback = val$callback;
  this.val$curSuggestion = val$curSuggestion;
}

defineSeed(749, 1, {}, SuggestBox$DefaultSuggestionDisplay$1_0);
_.execute = function execute_21(){
  $onSuggestionSelected(this.val$callback, this.val$curSuggestion);
}
;
_.val$callback = null;
_.val$curSuggestion = null;
function $getSelectedItemIndex(this$static){
  var selectedItem;
  selectedItem = this$static.selectedItem;
  if (selectedItem) {
    return $indexOf_0(this$static.items, selectedItem, 0);
  }
  return -1;
}

function $selectItem_0(this$static, index){
  var items;
  items = this$static.items;
  index > -1 && index < items.size_0 && $itemOver(this$static, (checkIndex(index, items.size_0) , dynamicCast(items.array[index], Q$MenuItem)), false);
}

function SuggestBox$SuggestionMenu_0(){
  MenuBar_0.call(this, true);
  this.element['className'] = '';
  this.focusOnHover = false;
}

defineSeed(750, 700, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$MenuBar, Q$PopupListener, Q$UIObject, Q$Widget, Q$EventListener_0]), SuggestBox$SuggestionMenu_0);
function SuggestBox$SuggestionMenuItem_0(suggestion){
  MenuItem_2.call(this, suggestion.displayString, true);
  this.element.style['whiteSpace'] = 'nowrap';
  this.element['className'] = 'item';
  this.suggestion = suggestion;
}

defineSeed(751, 707, makeCastMap([Q$HasVisibility, Q$MenuItem, Q$SuggestBox$SuggestionMenuItem, Q$UIObject]), SuggestBox$SuggestionMenuItem_0);
_.suggestion = null;
function SuggestOracle$Request_0(query){
  this.query = query;
  this.limit = 20;
}

defineSeed(752, 1, {}, SuggestOracle$Request_0);
_.limit = 20;
_.query = null;
function SuggestOracle$Response_0(suggestions){
  this.suggestions = suggestions;
}

defineSeed(753, 1, {}, SuggestOracle$Response_0);
_.suggestions = null;
function ValueBoxBase$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(771, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ValueBoxBase$1_0);
_.onChange = function onChange_0(event_0){
  fire_7(this.this$0, $getValue_2(this.this$0));
}
;
_.this$0 = null;
function $addDataDisplay(this$static, display){
  var handler;
  if (!display) {
    throw new IllegalArgumentException_1('display cannot be null');
  }
   else if ($contains_1(this$static.displays, display)) {
    throw new IllegalStateException_1('The specified display has already been added to this adapter.');
  }
  $add_20(this$static.displays, display);
  handler = $addRangeChangeHandler(display, new AbstractDataProvider$1_0(this$static, display));
  this$static.rangeChangeHandlers.put(display, handler);
  this$static.lastRowCount >= 0 && $setRowCount(display, this$static.lastRowCount, this$static.lastRowCountExact);
  $onRangeChanged(this$static, display);
}

function $updateRowCount(this$static, count){
  var display, display$iterator;
  this$static.lastRowCount = count;
  this$static.lastRowCountExact = true;
  for (display$iterator = $iterator($keySet_0(this$static.displays.map)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_6(display$iterator), Q$HasData);
    display.setRowCount(count, true);
  }
}

function $updateRowData(this$static, start, values){
  var display, display$iterator;
  for (display$iterator = $iterator($keySet_0(this$static.displays.map)); display$iterator.val$outerIter.hasNext();) {
    display = dynamicCast($next_6(display$iterator), Q$HasData);
    $updateRowData_0(display, start, values);
  }
}

function $updateRowData_0(display, start, values){
  var curEnd, curLength, curStart, end, range, realEnd, realLength, realStart, realValues;
  end = start + values.size_1();
  range = display.getVisibleRange();
  curStart = range.start;
  curLength = range.length_0;
  curEnd = curStart + curLength;
  if (start == curStart || curStart < end && curEnd > start) {
    realStart = curStart < start?start:curStart;
    realEnd = curEnd > end?end:curEnd;
    realLength = realEnd - realStart;
    realValues = values.subList(realStart - start, realStart - start + realLength);
    display.setRowData(realStart, realValues);
  }
}

defineSeed(813, 1, {});
_.lastRowCount = -1;
_.lastRowCountExact = false;
function AbstractDataProvider$1_0(this$0, val$display){
  this.this$0 = this$0;
  this.val$display = val$display;
}

defineSeed(814, 1, makeCastMap([Q$EventHandler, Q$RangeChangeEvent$Handler]), AbstractDataProvider$1_0);
_.onRangeChange = function onRangeChange_0(event_0){
  $onRangeChanged(this.this$0, this.val$display);
}
;
_.this$0 = null;
_.val$display = null;
function CellPreviewEvent_0(nativeEvent, display, context, value, isCellEditing, isSelectionHandled){
  this.nativeEvent = nativeEvent;
  this.display_0 = display;
  this.context = context;
  this.value_0 = value;
  this.isCellEditing = isCellEditing;
  this.isSelectionHandled = isSelectionHandled;
}

function fire_20(source, nativeEvent, display, context, value, isCellEditing, isSelectionHandled){
  var event_0;
  event_0 = new CellPreviewEvent_0(nativeEvent, display, context, value, isCellEditing, isSelectionHandled);
  !!TYPE_40 && !!source.handlerManager_0 && $fireEvent(source.handlerManager_0, event_0);
  return event_0;
}

defineSeed(815, 268, {}, CellPreviewEvent_0);
_.dispatch = function dispatch_30(handler){
  dynamicCast(handler, Q$CellPreviewEvent$Handler).onCellPreview(this);
}
;
_.getAssociatedType = function getAssociatedType_31(){
  return TYPE_40;
}
;
_.context = null;
_.display_0 = null;
_.isCanceled = false;
_.isCellEditing = false;
_.isSelectionHandled = false;
_.nativeEvent = null;
_.value_0 = null;
var TYPE_40 = null;
function $doMultiSelection(this$static, selectionModel, display, row, rowValue, action, selectRange, clearOthers){
  var addToSelection, end, pageStart, start;
  addToSelection = true;
  if (action) {
    switch (action.ordinal) {
      case 4:
        return;
      case 1:
        addToSelection = true;
        break;
      case 2:
        addToSelection = false;
        break;
      case 3:
        addToSelection = ($resolveChanges(selectionModel) , !selectionModel.selectedSet.containsKey(!selectionModel.keyProvider || rowValue == null?rowValue:dynamicCastJso(rowValue).jobId));
    }
  }
  pageStart = $getVisibleRange(display.presenter).start;
  if (selectRange && pageStart == this$static.lastPageStart && this$static.lastSelectedIndex > -1 && this$static.shiftAnchor > -1 && display == this$static.lastDisplay) {
    start = min_0(this$static.shiftAnchor, row);
    end = max_0(this$static.shiftAnchor, row);
    this$static.lastSelectedIndex < start?$setRangeSelection(selectionModel, display, new Range_1(this$static.lastSelectedIndex, start - this$static.lastSelectedIndex), !this$static.shiftAdditive, false):this$static.lastSelectedIndex > end?$setRangeSelection(selectionModel, display, new Range_1(end + 1, this$static.lastSelectedIndex - end), !this$static.shiftAdditive, false):(this$static.shiftAdditive = addToSelection);
    this$static.lastSelectedIndex = row;
    $setRangeSelection(selectionModel, display, new Range_1(start, end - start + 1), this$static.shiftAdditive, clearOthers);
  }
   else {
    this$static.lastDisplay = display;
    this$static.lastPageStart = pageStart;
    this$static.lastSelectedIndex = row;
    this$static.shiftAnchor = row;
    clearOthers && $clear_6(selectionModel);
    selectionModel.selectionChanges.put(!selectionModel.keyProvider || rowValue == null?rowValue:dynamicCastJso(rowValue).jobId, new MultiSelectionModel$SelectionChange_0(rowValue, addToSelection));
    $scheduleSelectionChangeEvent(selectionModel);
  }
}

function $handleMultiSelectionEvent(this$static, event_0, action, selectionModel){
  var clearOthers, ctrlOrMeta, keyCode, nativeEvent, shift, type;
  nativeEvent = event_0.nativeEvent;
  type = nativeEvent.type;
  if ($equals_4('click', type)) {
    shift = !!nativeEvent.shiftKey;
    ctrlOrMeta = !!nativeEvent.ctrlKey || !!nativeEvent.metaKey;
    clearOthers = !ctrlOrMeta;
    (!action || action == ($clinit_DefaultSelectionEventManager$SelectAction() , DEFAULT_1)) && (action = ctrlOrMeta?($clinit_DefaultSelectionEventManager$SelectAction() , TOGGLE):($clinit_DefaultSelectionEventManager$SelectAction() , SELECT));
    $doMultiSelection(this$static, selectionModel, event_0.display_0, event_0.context.index_0, event_0.value_0, action, shift, clearOthers);
  }
   else if ($equals_4('keyup', type)) {
    keyCode = nativeEvent.keyCode || 0;
    if (keyCode == 32) {
      shift = !!nativeEvent.shiftKey;
      (!action || action == ($clinit_DefaultSelectionEventManager$SelectAction() , DEFAULT_1)) && (action = ($clinit_DefaultSelectionEventManager$SelectAction() , TOGGLE));
      $doMultiSelection(this$static, selectionModel, event_0.display_0, event_0.context.index_0, event_0.value_0, action, shift, false);
    }
  }
}

function $handleSelectionEvent(event_0, action){
  var keyCode, nativeEvent, type, value;
  value = event_0.value_0;
  if (action) {
    switch (action.ordinal) {
      case 4:
        return;
      case 1:
        null.selectionChanges.put(!null.keyProvider || value == null?value:dynamicCastJso(value).jobId, new MultiSelectionModel$SelectionChange_0(value, true));
        $scheduleSelectionChangeEvent(null);
        return;
      case 2:
        null.selectionChanges.put(!null.keyProvider || value == null?value:dynamicCastJso(value).jobId, new MultiSelectionModel$SelectionChange_0(value, false));
        $scheduleSelectionChangeEvent(null);
        return;
      case 3:
        null.nullMethod(($resolveChanges(null) , !null.selectedSet.containsKey(!null.keyProvider || value == null?value:dynamicCastJso(value).jobId)));
        return;
    }
  }
  nativeEvent = event_0.nativeEvent;
  type = nativeEvent.type;
  if ($equals_4('click', type)) {
    !!nativeEvent.ctrlKey || !!nativeEvent.metaKey?null.nullMethod(($resolveChanges(null) , !null.selectedSet.containsKey(!null.keyProvider || value == null?value:dynamicCastJso(value).jobId))):(null.selectionChanges.put(!null.keyProvider || value == null?value:dynamicCastJso(value).jobId, new MultiSelectionModel$SelectionChange_0(value, true)) , $scheduleSelectionChangeEvent(null));
  }
   else if ($equals_4('keyup', type)) {
    keyCode = nativeEvent.keyCode || 0;
    keyCode == 32 && null.nullMethod(($resolveChanges(null) , !null.selectedSet.containsKey(!null.keyProvider || value == null?value:dynamicCastJso(value).jobId)));
  }
}

function $setRangeSelection(selectionModel, display, range, addToSelection, clearOthers){
  var i, itemCount, relativeEnd, relativeStart, toUpdate, value, value$iterator;
  toUpdate = new ArrayList_0;
  itemCount = $getCurrentState(display.presenter).rowData.size_0;
  relativeStart = range.start - $getVisibleRange(display.presenter).start;
  relativeEnd = relativeStart + range.length_0;
  for (i = relativeStart; i < relativeEnd && i < itemCount; ++i) {
    $add_13(toUpdate, ($checkRowBounds_0(display, i) , $getVisibleItem(display.presenter, i)));
  }
  clearOthers && $clear_6(selectionModel);
  for (value$iterator = new AbstractList$IteratorImpl_0(toUpdate); value$iterator.i < value$iterator.this$0_0.size_1();) {
    value = $next_5(value$iterator);
    selectionModel.selectionChanges.put(!selectionModel.keyProvider || value == null?value:dynamicCastJso(value).jobId, new MultiSelectionModel$SelectionChange_0(value, addToSelection));
    $scheduleSelectionChangeEvent(selectionModel);
  }
}

function DefaultSelectionEventManager_0(){
}

defineSeed(816, 1, makeCastMap([Q$EventHandler, Q$CellPreviewEvent$Handler]), DefaultSelectionEventManager_0);
_.onCellPreview = function onCellPreview_1(event_0){
  var action, display, selectionModel;
  if (event_0.isCellEditing || event_0.isSelectionHandled) {
    return;
  }
  display = event_0.display_0;
  selectionModel = display.presenter.selectionModel;
  if (!selectionModel) {
    return;
  }
  action = ($clinit_DefaultSelectionEventManager$SelectAction() , DEFAULT_1);
  selectionModel?$handleMultiSelectionEvent(this, event_0, action, selectionModel):$handleSelectionEvent(event_0, action);
}
;
_.lastDisplay = null;
_.lastPageStart = 0;
_.lastSelectedIndex = -1;
_.shiftAdditive = false;
_.shiftAnchor = -1;
function $clinit_DefaultSelectionEventManager$SelectAction(){
  $clinit_DefaultSelectionEventManager$SelectAction = nullMethod;
  DEFAULT_1 = new DefaultSelectionEventManager$SelectAction_0('DEFAULT', 0);
  SELECT = new DefaultSelectionEventManager$SelectAction_0('SELECT', 1);
  DESELECT = new DefaultSelectionEventManager$SelectAction_0('DESELECT', 2);
  TOGGLE = new DefaultSelectionEventManager$SelectAction_0('TOGGLE', 3);
  IGNORE = new DefaultSelectionEventManager$SelectAction_0('IGNORE', 4);
  $VALUES_20 = initValues(_3Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit, makeCastMap([Q$Serializable, Q$Enum_$1, Q$Object_$1]), Q$DefaultSelectionEventManager$SelectAction, [DEFAULT_1, SELECT, DESELECT, TOGGLE, IGNORE]);
}

function DefaultSelectionEventManager$SelectAction_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_21(){
  $clinit_DefaultSelectionEventManager$SelectAction();
  return $VALUES_20;
}

defineSeed(817, 57, makeCastMap([Q$DefaultSelectionEventManager$SelectAction, Q$Serializable, Q$Comparable, Q$Enum]), DefaultSelectionEventManager$SelectAction_0);
var $VALUES_20, DEFAULT_1, DESELECT, IGNORE, SELECT, TOGGLE;
function $onRangeChanged(this$static, display){
  var size;
  size = this$static.listWrapper.list.size_1();
  size > 0 && $updateRowData_0(display, 0, this$static.listWrapper);
}

function ListDataProvider_0(){
  ListDataProvider_1.call(this, new ArrayList_0);
}

function ListDataProvider_1(listToWrap){
  this.displays = new HashSet_0;
  this.rangeChangeHandlers = new HashMap_0;
  this.listWrapper = new ListDataProvider$ListWrapper_0(this, listToWrap);
}

defineSeed(818, 813, {}, ListDataProvider_0);
_.listWrapper = null;
function $addAll_1(this$static, c){
  var toRet;
  this$static.minModified = min_0(this$static.minModified, this$static.list.size_1());
  toRet = this$static.list.addAll(c);
  this$static.maxModified = this$static.list.size_1();
  this$static.modified = true;
  $flush(this$static);
  return toRet;
}

function $clear_5(this$static){
  this$static.list.clear();
  this$static.minModified = this$static.maxModified = 0;
  this$static.modified = true;
  $flush(this$static);
}

function $flush(this$static){
  if (this$static.delegate) {
    this$static.delegate.minModified = min_0(this$static.minModified + this$static.offset, this$static.delegate.minModified);
    this$static.delegate.maxModified = max_0(this$static.maxModified + this$static.offset, this$static.delegate.maxModified);
    this$static.delegate.modified = this$static.modified || this$static.delegate.modified;
    $flush(this$static.delegate);
    return;
  }
  this$static.flushCancelled = false;
  if (!this$static.flushPending) {
    this$static.flushPending = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), this$static.flushCommand);
  }
}

function $flushNow(this$static){
  var newSize;
  this$static.flushPending && (this$static.flushCancelled = true);
  if (this$static.this$0.listWrapper != this$static) {
    return;
  }
  newSize = this$static.list.size_1();
  if (this$static.curSize != newSize) {
    this$static.curSize = newSize;
    $updateRowCount(this$static.this$0, this$static.curSize);
  }
  if (this$static.modified) {
    $updateRowData(this$static.this$0, this$static.minModified, this$static.list.subList(this$static.minModified, this$static.maxModified));
    this$static.modified = false;
  }
  this$static.minModified = 2147483647;
  this$static.maxModified = -2147483648;
}

function $get_8(this$static, index){
  return this$static.list.get(index);
}

function $remove_19(this$static, index){
  var e, toRet;
  try {
    toRet = this$static.list.remove_3(index);
    this$static.minModified = min_0(this$static.minModified, index);
    this$static.maxModified = this$static.list.size_1();
    this$static.modified = true;
    $flush(this$static);
    return toRet;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function ListDataProvider$ListWrapper_0(this$0, list){
  ListDataProvider$ListWrapper_1.call(this, this$0, list, null, 0);
  $updateRowCount(this$0, list.size_0);
}

function ListDataProvider$ListWrapper_1(this$0, list, delegate, offset){
  this.this$0 = this$0;
  this.flushCommand = new ListDataProvider$ListWrapper$1_0(this);
  this.list = list;
  this.delegate = delegate;
  this.offset = offset;
}

defineSeed(819, 1, makeCastMap([Q$Collection, Q$List]), ListDataProvider$ListWrapper_0, ListDataProvider$ListWrapper_1);
_.add_2 = function add_26(index, element){
  var e;
  try {
    this.list.add_2(index, element);
    this.minModified = min_0(this.minModified, index);
    this.maxModified = this.list.size_1();
    this.modified = true;
    $flush(this);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
      e = $e0;
      throw new IndexOutOfBoundsException_1(e.detailMessage);
    }
     else 
      throw $e0;
  }
}
;
_.add_0 = function add_27(e){
  var toRet;
  toRet = this.list.add_0(e);
  this.minModified = min_0(this.minModified, this.list.size_1() - 1);
  this.maxModified = this.list.size_1();
  this.modified = true;
  $flush(this);
  return toRet;
}
;
_.addAll = function addAll_1(c){
  return $addAll_1(this, c);
}
;
_.clear = function clear_6(){
  $clear_5(this);
}
;
_.contains_0 = function contains_3(o){
  return this.list.contains_0(o);
}
;
_.containsAll = function containsAll_0(c){
  return this.list.containsAll(c);
}
;
_.equals$ = function equals_19(o){
  return this.list.equals$(o);
}
;
_.get = function get_1(index){
  return this.list.get(index);
}
;
_.hashCode$ = function hashCode_21(){
  return this.list.hashCode$();
}
;
_.indexOf_0 = function indexOf_1(o){
  return this.list.indexOf_0(o);
}
;
_.isEmpty_0 = function isEmpty_1(){
  return this.list.isEmpty_0();
}
;
_.iterator_0 = function iterator_15(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator = function listIterator_1(){
  return new ListDataProvider$ListWrapper$WrappedListIterator_0(this);
}
;
_.listIterator_0 = function listIterator_2(index){
  return new ListDataProvider$ListWrapper$WrappedListIterator_1(this, index);
}
;
_.remove_3 = function remove_33(index){
  return $remove_19(this, index);
}
;
_.remove_2 = function remove_34(o){
  var index;
  index = this.list.indexOf_0(o);
  if (index == -1) {
    return false;
  }
  $remove_19(this, index);
  return true;
}
;
_.set_0 = function set_2(index, element){
  var toRet;
  return toRet = this.list.set_0(index, element) , this.minModified = min_0(this.minModified, index) , this.maxModified = max_0(this.maxModified, index + 1) , this.modified = true , $flush(this) , toRet;
}
;
_.size_1 = function size_3(){
  return this.list.size_1();
}
;
_.subList = function subList_0(fromIndex, toIndex){
  return new ListDataProvider$ListWrapper_1(this.this$0, this.list.subList(fromIndex, toIndex), this, fromIndex);
}
;
_.toArray = function toArray_3(){
  return this.list.toArray();
}
;
_.curSize = 0;
_.delegate = null;
_.flushCancelled = false;
_.flushPending = false;
_.list = null;
_.maxModified = -2147483648;
_.minModified = 2147483647;
_.modified = false;
_.offset = 0;
_.this$0 = null;
function ListDataProvider$ListWrapper$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(820, 1, {}, ListDataProvider$ListWrapper$1_0);
_.execute = function execute_23(){
  this.this$1.flushPending = false;
  if (this.this$1.flushCancelled) {
    this.this$1.flushCancelled = false;
    return;
  }
  $flushNow(this.this$1);
}
;
_.this$1 = null;
function ListDataProvider$ListWrapper$WrappedListIterator_0(this$1){
  this.this$1 = this$1;
}

function ListDataProvider$ListWrapper$WrappedListIterator_1(this$1, start){
  var size;
  this.this$1 = this$1;
  size = this$1.list.size_1();
  if (start < 0 || start > size) {
    throw new IndexOutOfBoundsException_1('Index: ' + start + ', Size: ' + size);
  }
  this.i = start;
}

defineSeed(821, 1, {}, ListDataProvider$ListWrapper$WrappedListIterator_0, ListDataProvider$ListWrapper$WrappedListIterator_1);
_.hasNext = function hasNext_7(){
  return this.i < this.this$1.list.size_1();
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.next_0 = function next_8(){
  if (this.i >= this.this$1.list.size_1()) {
    throw new NoSuchElementException_0;
  }
  return $get_8(this.this$1, this.last = this.i++);
}
;
_.previous = function previous_0(){
  if (this.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return $get_8(this.this$1, this.last = --this.i);
}
;
_.remove_1 = function remove_35(){
  if (this.last < 0) {
    throw new IllegalStateException_1('Cannot call add/remove more than once per call to next/previous.');
  }
  $remove_19(this.this$1, this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
_.this$1 = null;
function $addSelectionChangeHandler(this$static, handler){
  return $addHandler(this$static.handlerManager, (!TYPE_43 && (TYPE_43 = new GwtEvent$Type_0) , TYPE_43), handler);
}

function $scheduleSelectionChangeEvent(this$static){
  this$static.isEventCancelled = false;
  if (!this$static.isEventScheduled) {
    this$static.isEventScheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE_0), new SelectionModel$AbstractSelectionModel$1_0(this$static));
  }
}

defineSeed(823, 1, makeCastMap([Q$HasHandlers]));
_.fireEvent = function fireEvent_5(event_0){
  $fireEvent(this.handlerManager, event_0);
}
;
_.isEventCancelled = false;
_.isEventScheduled = false;
_.keyProvider = null;
function $clear_6(this$static){
  var value, value$iterator;
  this$static.selectionChanges.clear();
  for (value$iterator = $iterator_0($values(this$static.selectedSet)); value$iterator.val$outerIter.hasNext();) {
    value = $next_7(value$iterator);
    this$static.selectionChanges.put(!this$static.keyProvider || value == null?value:dynamicCastJso(value).jobId, new MultiSelectionModel$SelectionChange_0(value, false));
  }
  $scheduleSelectionChangeEvent(this$static);
}

function $fireSelectionChangeEvent(this$static){
  this$static.isEventScheduled && (this$static.isEventCancelled = true);
  $resolveChanges(this$static);
}

function $getSelectedSet(this$static){
  $resolveChanges(this$static);
  return new HashSet_1($values(this$static.selectedSet));
}

function $isSelected(this$static, item){
  $resolveChanges(this$static);
  return this$static.selectedSet.containsKey(!this$static.keyProvider || item == null?item:dynamicCastJso(item).jobId);
}

function $resolveChanges(this$static){
  var changed, entry, entry$iterator, key, oldKey, oldValue, selected, value;
  if (this$static.selectionChanges.size_1() == 0) {
    return;
  }
  changed = false;
  for (entry$iterator = this$static.selectionChanges.entrySet_0().iterator_0(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), Q$Map$Entry);
    key = entry.getKey();
    value = dynamicCast(entry.getValue_0(), Q$MultiSelectionModel$SelectionChange);
    selected = value.isSelected;
    oldValue = this$static.selectedSet.get_0(key);
    if (selected) {
      this$static.selectedSet.put(key, value.item_0);
      oldKey = !this$static.keyProvider || oldValue == null?oldValue:dynamicCastJso(oldValue).jobId;
      changed || (changed = oldKey == null?key != null:!equals__devirtual$(oldKey, key));
    }
     else {
      if (oldValue != null) {
        this$static.selectedSet.remove_4(key);
        changed = true;
      }
    }
  }
  this$static.selectionChanges.clear();
  changed && fire_23(this$static);
}

function $setSelected_1(this$static, item){
  this$static.selectionChanges.put(!this$static.keyProvider || !item?item:item.jobId, new MultiSelectionModel$SelectionChange_0(item, false));
  $scheduleSelectionChangeEvent(this$static);
}

function MultiSelectionModel_0(keyProvider){
  MultiSelectionModel_1.call(this, keyProvider, new HashMap_0, new HashMap_0);
}

function MultiSelectionModel_1(keyProvider, selectedSet, selectionChanges){
  this.handlerManager = new HandlerManager_0(this);
  this.keyProvider = keyProvider;
  this.selectedSet = selectedSet;
  this.selectionChanges = selectionChanges;
}

defineSeed(822, 823, makeCastMap([Q$HasHandlers]), MultiSelectionModel_0);
_.selectedSet = null;
_.selectionChanges = null;
function MultiSelectionModel$SelectionChange_0(item, isSelected){
  this.item_0 = item;
  this.isSelected = isSelected;
}

defineSeed(824, 1, makeCastMap([Q$MultiSelectionModel$SelectionChange]), MultiSelectionModel$SelectionChange_0);
_.isSelected = false;
_.item_0 = null;
function Range_1(start, length_0){
  this.start = start;
  this.length_0 = length_0;
}

defineSeed(825, 1, makeCastMap([Q$Range, Q$Serializable]), Range_1);
_.equals$ = function equals_20(o){
  var r;
  if (!instanceOf(o, Q$Range)) {
    return false;
  }
  r = dynamicCast(o, Q$Range);
  return this.start == r.start && this.length_0 == r.length_0;
}
;
_.hashCode$ = function hashCode_22(){
  return this.length_0 * 31 ^ this.start;
}
;
_.toString$ = function toString_24(){
  return 'Range(' + this.start + ',' + this.length_0 + ')';
}
;
_.length_0 = 0;
_.start = 0;
function RangeChangeEvent_0(){
}

function fire_21(source){
  var event_0;
  if (TYPE_41) {
    event_0 = new RangeChangeEvent_0;
    !!source.handlerManager_0 && $fireEvent(source.handlerManager_0, event_0);
  }
}

defineSeed(826, 268, {}, RangeChangeEvent_0);
_.dispatch = function dispatch_31(handler){
  dynamicCast(handler, Q$RangeChangeEvent$Handler).onRangeChange(this);
}
;
_.getAssociatedType = function getAssociatedType_32(){
  return TYPE_41;
}
;
var TYPE_41 = null;
function $dispatch_4(handler){
  !!handler.this$0.display_0 && $handleRowCountChange(handler.this$0);
}

function RowCountChangeEvent_0(){
}

function fire_22(source){
  var event_0;
  if (TYPE_42) {
    event_0 = new RowCountChangeEvent_0;
    !!source.handlerManager_0 && $fireEvent(source.handlerManager_0, event_0);
  }
}

defineSeed(827, 268, {}, RowCountChangeEvent_0);
_.dispatch = function dispatch_32(handler){
  $dispatch_4(dynamicCast(handler, Q$RowCountChangeEvent$Handler));
}
;
_.getAssociatedType = function getAssociatedType_33(){
  return TYPE_42;
}
;
var TYPE_42 = null;
function SelectionChangeEvent_0(){
}

function fire_23(source){
  var event_0;
  if (TYPE_43) {
    event_0 = new SelectionChangeEvent_0;
    $fireEvent(source.handlerManager, event_0);
  }
}

defineSeed(828, 268, {}, SelectionChangeEvent_0);
_.dispatch = function dispatch_33(handler){
  dynamicCast(handler, Q$SelectionChangeEvent$Handler).onSelectionChange(this);
}
;
_.getAssociatedType = function getAssociatedType_34(){
  return TYPE_43;
}
;
var TYPE_43 = null;
function SelectionModel$AbstractSelectionModel$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(829, 1, {}, SelectionModel$AbstractSelectionModel$1_0);
_.execute = function execute_24(){
  this.this$1.isEventScheduled = false;
  if (this.this$1.isEventCancelled) {
    this.this$1.isEventCancelled = false;
    return;
  }
  $fireSelectionChangeEvent(this.this$1);
}
;
_.this$1 = null;
function $compareTo_10(this$static, b){
  return this$static.value_0 < b.value_0?-1:this$static.value_0 > b.value_0?1:0;
}

function Short_0(value){
  this.value_0 = value;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Short_0(s));
    return result;
  }
  return new Short_0(s);
}

defineSeed(883, 869, makeCastMap([Q$Serializable, Q$Comparable, Q$Number, Q$Short]), Short_0);
_.compareTo$ = function compareTo_10(b){
  return $compareTo_10(this, dynamicCast(b, Q$Short));
}
;
_.equals$ = function equals_28(o){
  return instanceOf(o, Q$Short) && dynamicCast(o, Q$Short).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_30(){
  return this.value_0;
}
;
_.toString$ = function toString_38(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = nullMethod;
  boxedValues_3 = initDim(_3Ljava_lang_Short_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Short, 256, 0);
}

var boxedValues_3;
function $replace_1(this$static, from, to){
  var regex;
  if (from < 256) {
    regex = toPowerOfTwoString(from);
    regex = '\\x' + '00'.substring(regex.length) + regex;
  }
   else {
    regex = String.fromCharCode(from);
  }
  return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
}

function $append_5(this$static, x){
  $append(this$static.data_0, x);
  return this$static;
}

function AbstractList$SubList_0(wrapped, fromIndex, toIndex){
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
  if (fromIndex > toIndex) {
    throw new IllegalArgumentException_1('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
  }
  if (fromIndex < 0) {
    throw new IndexOutOfBoundsException_1('fromIndex: ' + fromIndex + ' < 0');
  }
  if (toIndex > wrapped.size_1()) {
    throw new IndexOutOfBoundsException_1('toIndex: ' + toIndex + ' > wrapped.size() ' + wrapped.size_1());
  }
}

defineSeed(900, 687, makeCastMap([Q$Collection, Q$List]), AbstractList$SubList_0);
_.add_2 = function add_28(index, element){
  checkIndex(index, this.size_0 + 1);
  ++this.size_0;
  this.wrapped.add_2(this.fromIndex + index, element);
}
;
_.get = function get_4(index){
  checkIndex(index, this.size_0);
  return this.wrapped.get(this.fromIndex + index);
}
;
_.remove_3 = function remove_41(index){
  var result;
  checkIndex(index, this.size_0);
  result = this.wrapped.remove_3(this.fromIndex + index);
  --this.size_0;
  return result;
}
;
_.set_0 = function set_3(index, element){
  checkIndex(index, this.size_0);
  return this.wrapped.set_0(this.fromIndex + index, element);
}
;
_.size_1 = function size_7(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
_.wrapped = null;
defineSeed(910, 1, makeCastMap([Q$Collection]));
_.addAll = function addAll_2(c){
  throw new UnsupportedOperationException_0;
}
;
_.clear = function clear_8(){
  throw new UnsupportedOperationException_0;
}
;
_.contains_0 = function contains_10(o){
  return this.coll.contains_0(o);
}
;
_.containsAll = function containsAll_1(c){
  return this.coll.containsAll(c);
}
;
defineSeed(912, 910, makeCastMap([Q$Collection, Q$List]));
_.remove_3 = function remove_46(index){
  throw new UnsupportedOperationException_0;
}
;
_.subList = function subList_1(fromIndex, toIndex){
  return new Collections$UnmodifiableList_0(this.list.subList(fromIndex, toIndex));
}
;
defineSeed(915, 916, makeCastMap([Q$Collection, Q$Set]));
_.contains_0 = function contains_11(o){
  return this.coll.contains_0(o);
}
;
_.containsAll = function containsAll_2(o){
  return this.coll.containsAll(o);
}
;
function HashSet_1(c){
  this.map = new HashMap_1(c.val$entrySet.size_1());
  $addAll(this, c);
}

defineSeed(928, 446, makeCastMap([Q$Serializable, Q$Collection, Q$Set]), HashSet_1);
defineSeed(936, 687, makeCastMap([Q$Serializable, Q$Collection, Q$List, Q$RandomAccess, Q$Vector]));
_.addAll = function addAll_3(c){
  return $addAll_0(this.arrayList, c);
}
;
_.clear = function clear_10(){
  this.arrayList.clear();
}
;
_.containsAll = function containsAll_3(c){
  return $containsAll(this.arrayList, c);
}
;
_.removeRange = function removeRange_1(fromIndex, endIndex){
  $removeRange(this.arrayList, fromIndex, endIndex);
}
;
_.subList = function subList_2(fromIndex, toIndex){
  return new AbstractList$SubList_0(this.arrayList, fromIndex, toIndex);
}
;
function $clinit_ThemeableImageButton(){
  $clinit_ThemeableImageButton = nullMethod;
  $clinit_Image();
  BLANK_IMAGE = getHostPageBaseURL() + 'content/common-ui/resources/themes/images/spacer.gif';
}

function $addEnabledStyle(this$static, style){
  var s, s$index, s$max;
  for (s$index = 0 , s$max = style.length; s$index < s$max; ++s$index) {
    s = style[s$index];
    $add_20(this$static.enabledStyles, s);
  }
}

function $enable(this$static){
  var style, style$iterator;
  this$static.element['className'] = '';
  for (style$iterator = $iterator($keySet_0(this$static.enabledStyles.map)); style$iterator.val$outerIter.hasNext();) {
    style = dynamicCast($next_6(style$iterator), Q$String);
    setStyleName(this$static.element, style, true);
  }
}

function ThemeableImageButton_0(enabledStyles){
  $clinit_ThemeableImageButton();
  Image_5.call(this, BLANK_IMAGE);
  this.enabledStyles = new HashSet_0;
  this.disabledStyles = new HashSet_0;
  this.enabledStyles.map.clear();
  this.disabledStyles.map.clear();
  $add_20(this.enabledStyles, 'image-button');
  $add_20(this.disabledStyles, 'disabled-image-button');
  enabledStyles != null && enabledStyles.length > 0 && $addEnabledStyle(this, enabledStyles);
  $enable(this);
  $addDomHandler(this, new ThemeableImageButton$1_0(this), ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_6));
  $addDomHandler(this, new ThemeableImageButton$2_0(this), ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_10));
  $addDomHandler(this, new ThemeableImageButton$3_0(this), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_9));
  $addDomHandler(this, new ThemeableImageButton$4_0(this), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_8));
}

defineSeed(955, 340, makeCastMap([Q$HasMouseDownHandlers, Q$HasMouseMoveHandlers, Q$HasMouseOutHandlers, Q$HasMouseUpHandlers, Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$Image, Q$IsWidget, Q$UIObject, Q$Widget]), ThemeableImageButton_0);
_.onBrowserEvent_0 = function onBrowserEvent_22(event_0){
  $onBrowserEvent_1(this, event_0);
  event_0.preventDefault();
}
;
var BLANK_IMAGE;
function ThemeableImageButton$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(956, 1, makeCastMap([Q$MouseDownHandler, Q$EventHandler]), ThemeableImageButton$1_0);
_.onMouseDown = function onMouseDown_4(event_0){
  $removeStyleName(this.this$0, 'disabled-image-button-pressed');
  $addStyleName(this.this$0, 'image-button-pressed');
}
;
_.this$0 = null;
function ThemeableImageButton$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(957, 1, makeCastMap([Q$MouseUpHandler, Q$EventHandler]), ThemeableImageButton$2_0);
_.onMouseUp = function onMouseUp_4(event_0){
  $enable(this.this$0);
}
;
_.this$0 = null;
function ThemeableImageButton$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(958, 1, makeCastMap([Q$MouseOverHandler, Q$EventHandler]), ThemeableImageButton$3_0);
_.onMouseOver = function onMouseOver_2(event_0){
  $removeStyleName(this.this$0, 'disabled-image-button-over');
  $addStyleName(this.this$0, 'image-button-over');
}
;
_.this$0 = null;
function ThemeableImageButton$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(959, 1, makeCastMap([Q$MouseOutHandler, Q$EventHandler]), ThemeableImageButton$4_0);
_.onMouseOut = function onMouseOut_3(event_0){
  $enable(this.this$0);
}
;
_.this$0 = null;
function $getDate_0(this$static){
  var date;
  date = $getSelectedDate(this$static.datePicker);
  get_15(this$static.timePicker.timeOfDayLB.element.selectedIndex) == ($clinit_TimeUtil$TimeOfDay() , AM)?date.setHours_0(__parseAndValidateInt($getHour(this$static.timePicker), -2147483648, 2147483647)):date.setHours_0(__parseAndValidateInt($getHour(this$static.timePicker), -2147483648, 2147483647) + 12);
  date.setMinutes_0(__parseAndValidateInt($getMinute(this$static.timePicker), -2147483648, 2147483647));
  return date;
}

function $setEnabled_3(this$static, enabled){
  $setEnabled_1(this$static.datePicker.datePicker, enabled);
  $setEnabled_4(this$static.timePicker, enabled);
}

function DateTimePicker_0(){
  var p_0, handler;
  FlowPanel_0.call(this);
  this.format_0 = new DateBox$DefaultFormat_1(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_SHORT)));
  this.datePicker = new DatePickerEx_0(this.format_0);
  this.timePicker = new TimePicker_0;
  p_0 = new HorizontalPanel_0;
  $add_2(this, p_0, this.element);
  $setWidth(this.datePicker.datePicker, '12ex');
  p_0.add_1(this.datePicker.datePicker);
  $setCellVerticalAlignment(p_0, this.datePicker.datePicker, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  p_0.add_1(this.timePicker);
  $setCellVerticalAlignment(p_0, this.timePicker, ALIGN_MIDDLE);
  handler = new DateTimePicker$1_0;
  $setOnChangeHandler(this.datePicker, handler);
  $setOnChangeHandler_2(this.timePicker, handler);
}

defineSeed(970, 660, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$InsertPanel, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$IChangeHandler]), DateTimePicker_0);
function DateTimePicker$1_0(){
}

defineSeed(971, 1, {}, DateTimePicker$1_0);
_.onHandle = function onHandle_1(o){
  dynamicCast(o, Q$IChangeHandler);
}
;
function $setEnabled_4(this$static, enabled){
  $setEnabled(this$static.hourLB, enabled);
  $setEnabled(this$static.minuteLB, enabled);
  $setEnabled(this$static.timeOfDayLB, enabled);
}

function MessageDialogBox_2(title, message, okText){
  PromptDialogBox_1.call(this, title, okText, new Label_2(message));
}

defineSeed(986, 987, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$MouseListener, Q$Panel, Q$PopupListener, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$EventListener_0]), MessageDialogBox_2);
function $getButtonPanel(this$static){
  var hp;
  hp = new HorizontalPanel_0;
  hp.add_1(this$static.acceptBtn);
  $setCellWidth(hp, this$static.acceptBtn, '100%');
  $setCellHorizontalAlignment(hp, this$static.acceptBtn, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  hp.add_1(this$static.cancelBtn);
  return hp;
}

function ChangePasswordDialog_0(controller){
  var textBoxChangeHandler;
  GwtDialog_0.call(this);
  this.acceptBtn = new Button_1(getString('ok'));
  this.cancelBtn = new Button_1(getString('cancel'));
  this.width_1 = 260;
  this.height_1 = 180;
  $getButtonPanel(this);
  $setTitle_2(this, getString('changePassword'));
  $setEnabled(this.acceptBtn, false);
  this.newPasswordTextBox = new PasswordTextBox_0;
  $setWidth(this.newPasswordTextBox, '240px');
  this.reTypePasswordTextBox = new PasswordTextBox_0;
  $setWidth(this.reTypePasswordTextBox, '240px');
  textBoxChangeHandler = new ChangePasswordDialog$TextBoxValueChangeHandler_0(this);
  $addDomHandler(this.newPasswordTextBox, textBoxChangeHandler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
  $addDomHandler(this.reTypePasswordTextBox, textBoxChangeHandler, TYPE_5);
  $setStylePrimaryName(this.acceptBtn, 'pentaho-button');
  $addDomHandler(this.acceptBtn, new ChangePasswordDialog$AcceptListener_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $setStylePrimaryName(this.cancelBtn, 'pentaho-button');
  $addDomHandler(this.cancelBtn, new ChangePasswordDialog$CancelListener_0(this), TYPE_1);
  this.controller_0 = controller;
}

defineSeed(1103, 1104, makeCastMap([Q$XulComponent, Q$XulContainer, Q$XulEventSource, Q$XulDialog, Q$XulRoot, Q$Element_0, Q$AbstractGwtXulComponent, Q$GwtDomElement, Q$GwtDialog]), ChangePasswordDialog_0);
_.getButtonPanel = function getButtonPanel_1(){
  return $getButtonPanel(this);
}
;
_.getDialogContents = function getDialogContents_1(){
  var hp, hspacer, nameLabel, passwordLabel, vp, vspacer;
  hp = new HorizontalPanel_0;
  hspacer = new SimplePanel_0;
  hspacer.setWidth_0('10px');
  hp.add_1(hspacer);
  vp = new VerticalPanel_0;
  hp.add_1(vp);
  vspacer = new SimplePanel_0;
  vspacer.setHeight_0('10px');
  $add_17(vp, vspacer);
  nameLabel = new Label_2(getString('newPassword') + ':');
  $add_17(vp, nameLabel);
  $add_17(vp, this.newPasswordTextBox);
  passwordLabel = new Label_2(getString('retypePassword') + ':');
  $add_17(vp, passwordLabel);
  $add_17(vp, this.reTypePasswordTextBox);
  return hp;
}
;
_.controller_0 = null;
_.newPasswordTextBox = null;
_.reTypePasswordTextBox = null;
function ChangePasswordDialog$AcceptListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1109, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ChangePasswordDialog$AcceptListener_0);
_.onClick = function onClick_28(event_0){
  var newPassword;
  newPassword = $getPropertyString(this.this$0.newPasswordTextBox.element, 'value');
  $updatePassword(this.this$0.controller_0, newPassword);
  $hide_2(this.this$0);
}
;
_.this$0 = null;
function ChangePasswordDialog$CancelListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1110, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ChangePasswordDialog$CancelListener_0);
_.onClick = function onClick_29(event_0){
  $hide_2(this.this$0);
}
;
_.this$0 = null;
function ChangePasswordDialog$TextBoxValueChangeHandler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1111, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), ChangePasswordDialog$TextBoxValueChangeHandler_0);
_.onKeyUp = function onKeyUp_6(evt){
  var isEnabled, password, reTypePassword;
  password = $getPropertyString(this.this$0.newPasswordTextBox.element, 'value');
  reTypePassword = $getPropertyString(this.this$0.reTypePasswordTextBox.element, 'value');
  isEnabled = !(null == password || $equals_4('', $trim(password))) && $equals_4(password, reTypePassword);
  $setEnabled(this.this$0.acceptBtn, isEnabled);
}
;
_.this$0 = null;
function $clinit_ContentCleanerPanel(){
  $clinit_ContentCleanerPanel = nullMethod;
  $clinit_DockPanel();
  instance_7 = new ContentCleanerPanel_0;
}

function $activate(this$static){
  var contextURL, moduleBaseURL, moduleName, scheduleFileRequestBuilder;
  $clear_1(this$static);
  moduleBaseURL = getModuleBaseURL();
  moduleName = $moduleName;
  contextURL = $substring_0(moduleBaseURL, 0, moduleBaseURL.lastIndexOf(moduleName));
  scheduleFileRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), contextURL + 'api/scheduler/getContentCleanerJob?cb=' + toString_21(fromDouble(currentTimeMillis0())));
  $setHeader(scheduleFileRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(scheduleFileRequestBuilder, 'Content-Type', 'application/json');
  $setHeader(scheduleFileRequestBuilder, 'accept', 'application/json');
  try {
    $sendRequest(scheduleFileRequestBuilder, '', new ContentCleanerPanel$1_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $deleteContentCleaner(this$static, jsJob){
  var builder, re, startJobRequest, url;
  if (!jsJob || isEmpty_8(jsJob.jobId)) {
    $activate(this$static);
    return;
  }
  url = getHostPageBaseURL() + 'api/scheduler/removeJob';
  builder = new RequestBuilder_0(($clinit_RequestBuilder() , DELETE), url);
  $setHeader(builder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(builder, 'Content-Type', 'application/json');
  startJobRequest = new JSONObject_0;
  $put_1(startJobRequest, 'jobId', new JSONString_0(jsJob.jobId));
  try {
    $sendRequest(builder, $toString_4(startJobRequest), new ContentCleanerPanel$3_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      re = $e0;
      alert_0(re.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $deleteContentNow(age){
  var contextURL, date, json, moduleBaseURL, moduleName, scheduleFileRequestBuilder;
  date = $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , ISO_8601)), new Date_1, null);
  json = '{"jobName": "Content Cleaner", "actionClass": "org.pentaho.platform.admin.GeneratedContentCleaner", "jobParameters":[ { "name": "age", "stringValue": "' + toString_21(age) + '", "type": "string" }], "simpleJobTrigger": { "endTime": null, "repeatCount": "0", "repeatInterval": "0", "startTime": "' + date + '", "uiPassParam": "RUN_ONCE"} }';
  moduleBaseURL = getModuleBaseURL();
  moduleName = $moduleName;
  contextURL = $substring_0(moduleBaseURL, 0, moduleBaseURL.lastIndexOf(moduleName));
  scheduleFileRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , POST), contextURL + 'api/scheduler/job');
  $setHeader(scheduleFileRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(scheduleFileRequestBuilder, 'Content-Type', 'application/json');
  try {
    $sendRequest(scheduleFileRequestBuilder, json, new ContentCleanerPanel$2_0);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $parseJsonJob(json){
  window.top.jobjson = json;
  if (null == json || '' == json) {
    return null;
  }
  var obj = eval('(' + json + ')');
  return obj;
}

function ContentCleanerPanel_0(){
  DockPanel_0.call(this);
  this.element['className'] = 'pentaho-admin-panel';
  $activate(this);
}

defineSeed(1112, 651, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$ISysAdminPanel]), ContentCleanerPanel_0);
_.activate_0 = function activate_0(){
  $activate(this);
}
;
_.passivate_0 = function passivate(passivateCallback){
  $onSuccess_14(passivateCallback, ($clinit_Boolean() , $clinit_Boolean() , TRUE_3));
}
;
var instance_7;
function ContentCleanerPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1113, 1, {}, ContentCleanerPanel$1_0);
_.onError = function onError_7(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_7(request, response){
  var days, deleteGeneratedFilesOlderThan, deleteNowButton, deleteNowLabel, deleteScheduleButton, deleteScheduleLabel, desc, descLabel, editScheduleButton, fakeJob, fillPanel, nowLabelPanel, nowPanelWrapper, nowTextBox, scheduleButtonPanel, scheduleTextBox, scheduledPanel, settingsLabel, tmpJsJob, jsJob;
  nowTextBox = new TextBox_0;
  nowTextBox.element.style['width'] = '24px';
  nowTextBox.element.style['padding'] = 5 + ($clinit_Style$Unit() , 'px');
  nowTextBox.element.style['marginLeft'] = '5px';
  nowTextBox.element.style['marginRight'] = '5px';
  scheduleTextBox = new TextBox_0;
  scheduleTextBox.element.size = 4;
  tmpJsJob = $parseJsonJob(escapeJsonForEval(response.xmlHttpRequest.responseText));
  fakeJob = false;
  if (!tmpJsJob) {
    tmpJsJob = (jsJob = new Object , jsJob.jobParams = new Object , jsJob.jobParams.jobParams = [] , jsJob.jobParams.jobParams[0] = new Object , jsJob.jobParams.jobParams[0].name = 'ActionAdapterQuartzJob-ActionClass' , jsJob.jobParams.jobParams[0].value = 'org.pentaho.platform.admin.GeneratedContentCleaner' , jsJob.jobParams.jobParams[1] = new Object , jsJob.jobParams.jobParams[1].name = 'age' , jsJob.jobParams.jobParams[1].value = '15552000' , jsJob.jobTrigger = new Object , jsJob.jobTrigger['@type'] = 'simpleJobTrigger' , jsJob.jobTrigger.repeatCount = -1 , jsJob.jobTrigger.repeatInterval = 86400 , jsJob.jobTrigger.scheduleType = 'DAILY' , jsJob.jobName = 'GeneratedContentCleaner' , jsJob);
    fakeJob = true;
  }
  tmpJsJob?$setValue_3(scheduleTextBox, '' + toString_21(div_0(__parseAndValidateLong($getJobParamValue(tmpJsJob, 'age')), P15180_longLit))):(scheduleTextBox.element['value'] = '180' , undefined);
  $addDomHandler(scheduleTextBox, new ContentCleanerPanel$1$1_0(tmpJsJob, scheduleTextBox), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  settingsLabel = new Label_2(getString('settings'));
  settingsLabel.element['className'] = 'pentaho-fieldgroup-major';
  $add_8(this.this$0, settingsLabel, ($clinit_DockPanel() , NORTH_0));
  nowPanelWrapper = new VerticalPanel_0;
  deleteNowLabel = new Label_2(getString('deleteGeneratedFilesNow'));
  deleteNowLabel.element.style['paddingTop'] = '15px';
  deleteNowLabel.element['className'] = 'pentaho-fieldgroup-minor';
  $add_17(nowPanelWrapper, deleteNowLabel);
  nowLabelPanel = new HorizontalPanel_0;
  nowLabelPanel.element.style['paddingTop'] = '10px';
  nowLabelPanel.element.style['paddingBottom'] = '10px';
  deleteGeneratedFilesOlderThan = new Label_2(getString('deleteGeneratedFilesOlderThan'));
  deleteGeneratedFilesOlderThan.element.style['paddingTop'] = '7px';
  nowLabelPanel.add_1(deleteGeneratedFilesOlderThan);
  nowLabelPanel.add_1(nowTextBox);
  nowTextBox.element['value'] = '180';
  days = new Label_2(getString('daysDot'));
  days.element.style['paddingTop'] = '7px';
  nowLabelPanel.add_1(days);
  deleteNowButton = new Button_1(getString('deleteNow'));
  setStylePrimaryName(deleteNowButton.element, 'pentaho-button');
  $addDomHandler(deleteNowButton, new ContentCleanerPanel$1$2_0(nowTextBox), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $add_17(nowPanelWrapper, nowLabelPanel);
  $add_17(nowPanelWrapper, deleteNowButton);
  $add_8(this.this$0, nowPanelWrapper, NORTH_0);
  scheduledPanel = new VerticalPanel_0;
  deleteScheduleLabel = new Label_2(getString('scheduleDeletionOfGeneratedFiles'));
  deleteScheduleLabel.element['className'] = 'pentaho-fieldgroup-minor';
  deleteScheduleLabel.element.style['paddingTop'] = '15px';
  $add_17(scheduledPanel, deleteScheduleLabel);
  if (fakeJob) {
    descLabel = new Label_2(getString('generatedFilesAreNotScheduledToBeDeleted'));
    $add_17(scheduledPanel, descLabel);
  }
   else {
    desc = $getDescription(tmpJsJob.jobTrigger);
    descLabel = new Label_2(desc);
    $add_17(scheduledPanel, descLabel);
  }
  descLabel.element.style['paddingTop'] = '10px';
  descLabel.element.style['paddingBottom'] = '10px';
  editScheduleButton = new Button_1(getString('edit'));
  fakeJob && $setText(editScheduleButton, getString('scheduleDeletion'));
  deleteScheduleButton = new Button_1(getString('cancelSchedule'));
  setStylePrimaryName(deleteScheduleButton.element, 'pentaho-button');
  $addDomHandler(deleteScheduleButton, new ContentCleanerPanel$1$3_0(this, tmpJsJob), TYPE_1);
  setStylePrimaryName(editScheduleButton.element, 'pentaho-button');
  $addDomHandler(editScheduleButton, new ContentCleanerPanel$1$4_0(this, scheduleTextBox, tmpJsJob), TYPE_1);
  scheduleButtonPanel = new HorizontalPanel_0;
  scheduleButtonPanel.add_1(editScheduleButton);
  fakeJob || scheduleButtonPanel.add_1(deleteScheduleButton);
  $add_17(scheduledPanel, scheduleButtonPanel);
  $add_8(this.this$0, scheduledPanel, NORTH_0);
  fillPanel = new VerticalPanel_0;
  $add_8(this.this$0, fillPanel, NORTH_0);
  $getParentElement(fillPanel.element).style['height'] = '100%';
}
;
_.this$0 = null;
function ContentCleanerPanel$1$1_0(val$jsJob, val$scheduleTextBox){
  this.val$jsJob = val$jsJob;
  this.val$scheduleTextBox = val$scheduleTextBox;
}

defineSeed(1114, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), ContentCleanerPanel$1$1_0);
_.onChange = function onChange_4(event_0){
  var i, params;
  if (this.val$jsJob) {
    params = this.val$jsJob.jobParams.jobParams;
    for (i = 0; i < params.length; ++i) {
      if ($equals_4(params[i].name, 'age')) {
        $setValue_11(params[i], '' + toString_21(mul(__parseAndValidateLong($getPropertyString(this.val$scheduleTextBox.element, 'value')), P15180_longLit)));
        break;
      }
    }
  }
}
;
_.val$jsJob = null;
_.val$scheduleTextBox = null;
function ContentCleanerPanel$1$2_0(val$nowTextBox){
  this.val$nowTextBox = val$nowTextBox;
}

defineSeed(1115, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ContentCleanerPanel$1$2_0);
_.onClick = function onClick_30(event_0){
  $deleteContentNow(mul(__parseAndValidateLong($getValue_2(this.val$nowTextBox)), P15180_longLit));
}
;
_.val$nowTextBox = null;
function ContentCleanerPanel$1$3_0(this$1, val$jsJob){
  this.this$1 = this$1;
  this.val$jsJob = val$jsJob;
}

defineSeed(1116, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ContentCleanerPanel$1$3_0);
_.onClick = function onClick_31(event_0){
  $deleteContentCleaner(this.this$1.this$0, this.val$jsJob);
}
;
_.this$1 = null;
_.val$jsJob = null;
function ContentCleanerPanel$1$4_0(this$1, val$scheduleTextBox, val$jsJob){
  this.this$1 = this$1;
  this.val$scheduleTextBox = val$scheduleTextBox;
  this.val$jsJob = val$jsJob;
}

defineSeed(1117, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), ContentCleanerPanel$1$4_0);
_.onClick = function onClick_32(event_0){
  var callback, editSchedule, scheduleLabelPanel;
  callback = new ContentCleanerPanel$1$4$1_0(this, this.val$jsJob);
  scheduleLabelPanel = new HorizontalPanel_0;
  scheduleLabelPanel.add_1(new Label_3(getString('deleteGeneratedFilesOlderThan')));
  scheduleLabelPanel.add_1(this.val$scheduleTextBox);
  scheduleLabelPanel.add_1(new Label_3(getString('daysUsingTheFollowingRules')));
  editSchedule = new ScheduleRecurrenceDialog_2(null, this.val$jsJob, callback, false, false, ($clinit_AbstractWizardDialog$ScheduleDialogType() , SCHEDULER));
  editSchedule.showSuccessDialog = false;
  $addCustomPanel(editSchedule, scheduleLabelPanel, ($clinit_DockPanel() , NORTH_0));
  $center_2(editSchedule);
}
;
_.this$1 = null;
_.val$jsJob = null;
_.val$scheduleTextBox = null;
function ContentCleanerPanel$1$4$1_0(this$2, val$jsJob){
  this.this$2 = this$2;
  this.val$jsJob = val$jsJob;
}

defineSeed(1118, 1, {}, ContentCleanerPanel$1$4$1_0);
_.cancelPressed = function cancelPressed_2(){
}
;
_.okPressed = function okPressed_2(){
  $deleteContentCleaner(this.this$2.this$1.this$0, this.val$jsJob);
}
;
_.this$2 = null;
_.val$jsJob = null;
function ContentCleanerPanel$2_0(){
}

defineSeed(1119, 1, {}, ContentCleanerPanel$2_0);
_.onError = function onError_8(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_8(request, response){
}
;
function ContentCleanerPanel$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1120, 1, {}, ContentCleanerPanel$3_0);
_.onError = function onError_9(request, exception){
  $activate(this.this$0);
}
;
_.onResponseReceived = function onResponseReceived_9(request, response){
  $activate(this.this$0);
}
;
_.this$0 = null;
function $createEmailPanel(this$static){
  var buttonsPanel, emailFromName, emailOrginLabel, hPanel, hSpacer, mailPanel, mailServerLabel, protocolHbox, serverSettingsLabel, vSpacer;
  mailPanel = new VerticalPanel_0;
  mailServerLabel = new Label_2(getString('mailServer'));
  mailServerLabel.element['className'] = 'pentaho-fieldgroup-major';
  $add_17(mailPanel, mailServerLabel);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('20px');
  $add_17(mailPanel, vSpacer);
  serverSettingsLabel = new Label_2(getString('serverSettings'));
  serverSettingsLabel.element['className'] = 'pentaho-fieldgroup-minor';
  $add_17(mailPanel, serverSettingsLabel);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('20px');
  $add_17(mailPanel, vSpacer);
  $add_17(mailPanel, new Label_2(getString('smtpHost') + ':'));
  this$static.smtpHostTextBox = new TextBox_0;
  $setWidth(this$static.smtpHostTextBox, '220px');
  $add_17(mailPanel, this$static.smtpHostTextBox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(mailPanel, vSpacer);
  $add_17(mailPanel, new Label_2(getString('port') + ':'));
  this$static.portTextBox = new TextBox_0;
  $setWidth(this$static.portTextBox, '220px');
  $add_17(mailPanel, this$static.portTextBox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(mailPanel, vSpacer);
  this$static.authenticationCheckBox = new CheckBox_2(getString('useAuthentication'));
  $add_17(mailPanel, this$static.authenticationCheckBox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(mailPanel, vSpacer);
  this$static.authenticationPanel = new VerticalPanel_0;
  $add_17(mailPanel, this$static.authenticationPanel);
  $add_17(this$static.authenticationPanel, new Label_2(getString('userName') + ':'));
  this$static.userNameTextBox = new TextBox_0;
  $setWidth(this$static.userNameTextBox, '220px');
  $add_17(this$static.authenticationPanel, this$static.userNameTextBox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(this$static.authenticationPanel, vSpacer);
  $add_17(this$static.authenticationPanel, new Label_2(getString('password') + ':'));
  hPanel = new HorizontalPanel_0;
  this$static.passwordTextBox = new PasswordTextBox_0;
  $setWidth(this$static.passwordTextBox, '220px');
  hPanel.add_1(this$static.passwordTextBox);
  new SimplePanel_0;
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('15px');
  hPanel.add_1(hSpacer);
  $add_17(this$static.authenticationPanel, hPanel);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(mailPanel, vSpacer);
  protocolHbox = new HorizontalPanel_0;
  protocolHbox.add_1(new Label_2(getString('protocol') + ':'));
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('15px');
  protocolHbox.add_1(hSpacer);
  this$static.protocolsListBox = new ListBox_0;
  $addItem(this$static.protocolsListBox, getString('smtp'));
  $addItem(this$static.protocolsListBox, getString('smtps'));
  protocolHbox.add_1(this$static.protocolsListBox);
  $add_17(mailPanel, protocolHbox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(mailPanel, vSpacer);
  emailOrginLabel = new Label_2(getString('emailOriginLabel'));
  $add_17(mailPanel, emailOrginLabel);
  this$static.fromAddressTextBox = new TextBox_0;
  $setWidth(this$static.fromAddressTextBox, '220px');
  $add_17(mailPanel, this$static.fromAddressTextBox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(mailPanel, vSpacer);
  emailFromName = new Label_2(getString('emailFromNameLabel'));
  $add_17(mailPanel, emailFromName);
  this$static.fromNameTextBox = new TextBox_0;
  $setWidth(this$static.fromNameTextBox, '220px');
  $add_17(mailPanel, this$static.fromNameTextBox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('10px');
  $add_17(mailPanel, vSpacer);
  this$static.useStartTLSCheckBox = new CheckBox_2(getString('useStartTLS'));
  $add_17(mailPanel, this$static.useStartTLSCheckBox);
  this$static.useSSLCheckBox = new CheckBox_2(getString('useSSL'));
  $add_17(mailPanel, this$static.useSSLCheckBox);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('20px');
  $add_17(mailPanel, vSpacer);
  buttonsPanel = new HorizontalPanel_0;
  $add_17(mailPanel, buttonsPanel);
  this$static.testButton = new Button_1(getString('connectionTest.label'));
  $setStylePrimaryName(this$static.testButton, 'pentaho-button');
  buttonsPanel.add_1(this$static.testButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('10px');
  buttonsPanel.add_1(hSpacer);
  this$static.saveButton = new Button_1(getString('save'));
  $setStylePrimaryName(this$static.saveButton, 'pentaho-button');
  buttonsPanel.add_1(this$static.saveButton);
  return mailPanel;
}

function $isPortValid(portValue){
  var port, portValid;
  portValid = true;
  try {
    port = valueOf_3(__parseAndValidateInt(portValue, -32768, 32767) << 16 >> 16);
    port.value_0 == -1 && (portValid = false);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Exception)) {
      portValid = false;
    }
     else 
      throw $e0;
  }
  return portValid;
}

defineSeed(1121, 628, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget]));
_.authenticationCheckBox = null;
_.authenticationPanel = null;
_.fromAddressTextBox = null;
_.fromNameTextBox = null;
_.passwordTextBox = null;
_.portTextBox = null;
_.protocolsListBox = null;
_.saveButton = null;
_.smtpHostTextBox = null;
_.testButton = null;
_.useSSLCheckBox = null;
_.useStartTLSCheckBox = null;
_.userNameTextBox = null;
function $getEmailConfig(this$static){
  var executableTypesRequestBuilder, serviceUrl;
  serviceUrl = getHostPageBaseURL() + 'api/emailconfig/getEmailConfig?cb=' + toString_21(fromDouble(currentTimeMillis0()));
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), serviceUrl);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/json');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new EmailAdminPanelController$15_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $setEmailConfig(this$static){
  var executableTypesRequestBuilder, serviceUrl;
  serviceUrl = getHostPageBaseURL() + 'api/emailconfig/setEmailConfig';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $setHeader(executableTypesRequestBuilder, 'Content-Type', 'application/json');
    $sendRequest(executableTypesRequestBuilder, $toString_4(new JSONObject_1(this$static.emailConfig)), new EmailAdminPanelController$14_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $testEmail(this$static){
  showBusyIndicator(getString('pleaseWait'), getString('connectionTest.inprog'));
  $test_0(this$static.emailTester, this$static.emailConfig);
}

function EmailAdminPanelController_0(){
  var emailTestCallback;
  SimplePanel_0.call(this);
  this.element.style['width'] = '100%';
  this.element.style['height'] = '100%';
  $setWidget_1(this, $createEmailPanel(this));
  $setEnabled(this.saveButton, true);
  this.etd = new EmailTestDialog_0;
  this.isDirty = false;
  $getEmailConfig(this);
  emailTestCallback = new EmailAdminPanelController$1_0(this);
  this.emailTester = new EmailTester_0(emailTestCallback);
  $addDomHandler(this.testButton, new EmailAdminPanelController$2_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addValueChangeHandler_0(this.authenticationCheckBox, new EmailAdminPanelController$3_0(this));
  $addDomHandler(this.smtpHostTextBox, new EmailAdminPanelController$4_0(this), ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
  $addDomHandler(this.portTextBox, new EmailAdminPanelController$5_0(this), TYPE_5);
  $addDomHandler(this.fromAddressTextBox, new EmailAdminPanelController$6_0(this), TYPE_5);
  $addDomHandler(this.fromNameTextBox, new EmailAdminPanelController$7_0(this), TYPE_5);
  $addDomHandler(this.userNameTextBox, new EmailAdminPanelController$8_0(this), TYPE_5);
  $addValueChangeHandler_0(this.useSSLCheckBox, new EmailAdminPanelController$9_0(this));
  $addValueChangeHandler_0(this.useStartTLSCheckBox, new EmailAdminPanelController$10_0(this));
  $addDomHandler(this.protocolsListBox, new EmailAdminPanelController$11_0(this), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  $addDomHandler(this.saveButton, new EmailAdminPanelController$12_0(this), TYPE_1);
  $addDomHandler(this.passwordTextBox, new EmailAdminPanelController$13_0(this), TYPE_5);
}

defineSeed(1122, 1121, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$ISysAdminPanel]), EmailAdminPanelController_0);
_.activate_0 = function activate_1(){
  this.isDirty = false;
  $getEmailConfig(this);
}
;
_.passivate_0 = function passivate_0(callback){
  var messageBox;
  if (this.isDirty) {
    messageBox = new GwtConfirmBox_0;
    $setTitle_2(messageBox, getString('confirm'));
    $setMessage_2(messageBox, getString('dirtyStateMessage'));
    $setAcceptLabel(messageBox, getString('yes'));
    $setCancelLabel(messageBox, getString('no'));
    $addDialogCallback(messageBox, new EmailAdminPanelController$16_0(callback));
    $show_3(messageBox);
  }
   else {
    $onSuccess_14(callback, ($clinit_Boolean() , $clinit_Boolean() , TRUE_3));
  }
}
;
_.emailConfig = null;
_.emailTester = null;
_.isDirty = false;
var emailAdminPanelController = null;
function $onFailure(this$static, err){
  hideBusyIndicator();
  $show_5(this$static.this$0.etd, err.getMessage());
}

function $onSuccess_1(this$static, message){
  hideBusyIndicator();
  $show_5(this$static.this$0.etd, message);
}

function EmailAdminPanelController$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1123, 1, {}, EmailAdminPanelController$1_0);
_.onFailure = function onFailure_1(err){
  $onFailure(this, err);
}
;
_.onSuccess_0 = function onSuccess_1(message){
  $onSuccess_1(this, dynamicCast(message, Q$String));
}
;
_.this$0 = null;
function EmailAdminPanelController$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1124, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), EmailAdminPanelController$10_0);
_.onValueChange = function onValueChange_3(booleanValueChangeEvent){
  $setUseStartTls(this.this$0.emailConfig, $getValue_0(this.this$0.useStartTLSCheckBox).value_0);
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1125, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), EmailAdminPanelController$11_0);
_.onChange = function onChange_5(changeEvent){
  $setSmtpProtocol(this.this$0.emailConfig, $getItemText(this.this$0.protocolsListBox, this.this$0.protocolsListBox.element.selectedIndex));
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$12_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1126, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), EmailAdminPanelController$12_0);
_.onClick = function onClick_33(clickEvent){
  $setEmailConfig(this.this$0);
}
;
_.this$0 = null;
function EmailAdminPanelController$13_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1127, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), EmailAdminPanelController$13_0);
_.onKeyUp = function onKeyUp_7(keyUpEvent){
  $setPassword(this.this$0.emailConfig, $getValue_2(this.this$0.passwordTextBox));
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$14_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1128, 1, {}, EmailAdminPanelController$14_0);
_.onError = function onError_10(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_10(request, response){
  this.this$0.isDirty = false;
}
;
_.this$0 = null;
function EmailAdminPanelController$15_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1129, 1, {}, EmailAdminPanelController$15_0);
_.onError = function onError_11(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_11(request, response){
  var i, password, protocol;
  this.this$0.emailConfig = parseEmailConfig(escapeJsonForEval(response.xmlHttpRequest.responseText));
  $setValue_1(this.this$0.authenticationCheckBox, ($clinit_Boolean() , $clinit_Boolean() , $equalsIgnoreCase('true', this.this$0.emailConfig.authenticate + '')?TRUE_3:FALSE_3));
  $setVisible(this.this$0.authenticationPanel, $equalsIgnoreCase('true', this.this$0.emailConfig.authenticate + ''));
  $setValue_3(this.this$0.smtpHostTextBox, this.this$0.emailConfig.smtpHost);
  $setValue_3(this.this$0.portTextBox, this.this$0.emailConfig.smtpPort + '');
  $setValue_1(this.this$0.useStartTLSCheckBox, $equalsIgnoreCase('true', this.this$0.emailConfig.useStartTls + '')?TRUE_3:FALSE_3);
  $setValue_1(this.this$0.useSSLCheckBox, $equalsIgnoreCase('true', this.this$0.emailConfig.useSsl + '')?TRUE_3:FALSE_3);
  $setValue_3(this.this$0.fromAddressTextBox, this.this$0.emailConfig.defaultFrom);
  $setValue_3(this.this$0.fromNameTextBox, this.this$0.emailConfig.fromName);
  $setValue_3(this.this$0.userNameTextBox, this.this$0.emailConfig.userId);
  password = this.this$0.emailConfig.password;
  $setValue_3(this.this$0.passwordTextBox, password);
  protocol = this.this$0.emailConfig.smtpProtocol;
  $setSelectedIndex_0(this.this$0.protocolsListBox, -1);
  if (!(null == protocol || $equals_4('', $trim(protocol)))) {
    for (i = 0; i < this.this$0.protocolsListBox.element.options.length; ++i) {
      if ($equalsIgnoreCase(protocol, $getItemText(this.this$0.protocolsListBox, i))) {
        $setSelectedIndex_0(this.this$0.protocolsListBox, i);
        break;
      }
    }
  }
}
;
_.this$0 = null;
function $onClose(this$static, status_0){
  status_0 == 0 && $onSuccess_14(this$static.val$callback, ($clinit_Boolean() , $clinit_Boolean() , TRUE_3));
  if (status_0 == 1) {
    $selectAdminCatTreeTreeItem((!instance_14 && (instance_14 = new MantleXul_0) , instance_14), getString('emailSmtpServer'));
    $onSuccess_14(this$static.val$callback, ($clinit_Boolean() , $clinit_Boolean() , FALSE_3));
  }
}

function EmailAdminPanelController$16_0(val$callback){
  this.val$callback = val$callback;
}

defineSeed(1130, 1, makeCastMap([Q$XulDialogCallback]), EmailAdminPanelController$16_0);
_.onClose_0 = function onClose_6(component, status_0, value){
  $onClose(this, status_0);
}
;
_.val$callback = null;
function EmailAdminPanelController$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1131, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), EmailAdminPanelController$2_0);
_.onClick = function onClick_34(clickEvent){
  $testEmail(this.this$0);
}
;
_.this$0 = null;
function EmailAdminPanelController$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1132, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), EmailAdminPanelController$3_0);
_.onValueChange = function onValueChange_4(booleanValueChangeEvent){
  $setAuthenticate(this.this$0.emailConfig, dynamicCast(booleanValueChangeEvent.getValue_0(), Q$Boolean).value_0);
  $setVisible(this.this$0.authenticationPanel, dynamicCast(booleanValueChangeEvent.getValue_0(), Q$Boolean).value_0);
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1133, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), EmailAdminPanelController$4_0);
_.onKeyUp = function onKeyUp_8(keyUpEvent){
  $setSmtpHost(this.this$0.emailConfig, $getValue_2(this.this$0.smtpHostTextBox));
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$5_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1134, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), EmailAdminPanelController$5_0);
_.onKeyUp = function onKeyUp_9(keyUpEvent){
  var port;
  port = valueOf_3($isPortValid($getValue_2(this.this$0.portTextBox))?__parseAndValidateInt($getValue_2(this.this$0.portTextBox), -32768, 32767) << 16 >> 16:-1);
  $setSmtpPort(this.this$0.emailConfig, port.value_0);
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$6_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1135, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), EmailAdminPanelController$6_0);
_.onKeyUp = function onKeyUp_10(keyUpEvent){
  $setDefaultFrom(this.this$0.emailConfig, $getValue_2(this.this$0.fromAddressTextBox));
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$7_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1136, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), EmailAdminPanelController$7_0);
_.onKeyUp = function onKeyUp_11(keyUpEvent){
  $setFromName(this.this$0.emailConfig, $getValue_2(this.this$0.fromNameTextBox));
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1137, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), EmailAdminPanelController$8_0);
_.onKeyUp = function onKeyUp_12(keyUpEvent){
  $setUserId(this.this$0.emailConfig, $getValue_2(this.this$0.userNameTextBox));
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function EmailAdminPanelController$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1138, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), EmailAdminPanelController$9_0);
_.onValueChange = function onValueChange_5(booleanValueChangeEvent){
  $setUseSsl(this.this$0.emailConfig, $getValue_0(this.this$0.useSSLCheckBox).value_0);
  this.this$0.isDirty = true;
}
;
_.this$0 = null;
function $setContent_1(this$static, content_0){
  if (content_0) {
    $setVerticalAlignment(dynamicCast(this$static.dialogContent.cellFormatter, Q$FlexTable$FlexCellFormatter_0), 0, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
    $setHorizontalAlignment_1(dynamicCast(this$static.dialogContent.cellFormatter, Q$FlexTable$FlexCellFormatter_0), 0, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    $setWidget_4(this$static.dialogContent, 0, 0, content_0);
    $setStyleName_2(this$static.dialogContent.cellFormatter, 0, 0, 'dialog-content');
    $getElement_1(this$static.dialogContent.cellFormatter).style['padding'] = '10px 20px 20px 20px';
    content_0.setHeight_0('100%');
    content_0.setWidth_0('100%');
  }
}

function $show_5(this$static, message){
  $setText_3(this$static.statusLabel, message);
  $center_0(this$static);
  !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1_0(this$static)));
  $show(this$static);
  !!this$static.focusWidget && this$static.focusWidget.setFocus(true);
}

function EmailTestDialog_0(){
  var dialogButtonPanel, dialogButtonPanelWrapper, hp;
  DialogBox_4.call(this, false, true);
  this.dialogContent = new FlexTable_1;
  $setText_2(this, getString('connectionTest.label'));
  this.closeButton = new Button_1(getString('close'));
  $setStylePrimaryName(this.closeButton, 'pentaho-button');
  this.closeButton.element.setAttribute('id', 'okButton');
  $addDomHandler(this.closeButton, new EmailTestDialog$1_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  dialogButtonPanel = new HorizontalPanel_0;
  dialogButtonPanel.spacing = 0;
  dialogButtonPanel.table['cellSpacing'] = 0;
  dialogButtonPanel.add_1(this.closeButton);
  dialogButtonPanelWrapper = new HorizontalPanel_0;
  $setHorizontalAlignment_2(dialogButtonPanelWrapper, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  dialogButtonPanelWrapper.element['className'] = 'button-panel';
  dialogButtonPanelWrapper.setWidth_0('100%');
  dialogButtonPanelWrapper.add_1(dialogButtonPanel);
  $setCellPadding_2(this.dialogContent, 0);
  $setCellSpacing_2(this.dialogContent, 0);
  $setHeight_2(dynamicCast(this.dialogContent.cellFormatter, Q$FlexTable$FlexCellFormatter_0));
  $setWidget_4(this.dialogContent, 1, 0, dialogButtonPanelWrapper);
  $setVerticalAlignment(this.dialogContent.cellFormatter, 1, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
  $setWidth(this.dialogContent, '100%');
  $setWidget_3(this, this.dialogContent);
  $setWidth_1(this, '360px');
  $setHeight_1(this, '100px');
  hp = new HorizontalPanel_0;
  this.statusLabel = new Label_2('');
  hp.add_1(this.statusLabel);
  hp.setHeight_0('100%');
  hp.setWidth_0('100%');
  $setContent_1(this, hp);
  $setEnabled(this.closeButton, true);
  $setVisible(this.closeButton, true);
}

defineSeed(1139, 982, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$MouseListener, Q$Panel, Q$PopupListener, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$EventListener_0]), EmailTestDialog_0);
_.closeButton = null;
_.statusLabel = null;
function EmailTestDialog$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1140, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), EmailTestDialog$1_0);
_.onClick = function onClick_35(event_0){
  $hide_0(this.this$0);
}
;
_.this$0 = null;
function $test_0(this$static, emailConfig){
  this$static.emailConfig = emailConfig;
  $setHeader(this$static.executableTypesRequestBuilder, 'Content-Type', 'application/json');
  $setHeader(this$static.executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  try {
    $sendRequest(this$static.executableTypesRequestBuilder, $toString_4(new JSONObject_1(this$static.emailConfig)), new EmailTester$RequestCallbackHandler_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function EmailTester_0(callback){
  this.serviceUrl = getHostPageBaseURL() + 'api/emailconfig/sendEmailTest';
  this.executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), this.serviceUrl);
  this.callback = callback;
}

defineSeed(1141, 1, {}, EmailTester_0);
_.callback = null;
_.emailConfig = null;
function EmailTester$RequestCallbackHandler_0(this$0){
  this.this$0 = this$0;
  this.EMAIL_TEST_SUCCESS = getString_0('connectionTest.sucess', initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, [this.this$0.emailConfig.defaultFrom]));
  this.EMAIL_TEST_FAIL = getString('connectionTest.fail');
}

defineSeed(1142, 1, {}, EmailTester$RequestCallbackHandler_0);
_.onError = function onError_12(arg0, arg1){
  $onFailure(this.this$0.callback, new Exception_2(this.EMAIL_TEST_FAIL, arg1));
}
;
_.onResponseReceived = function onResponseReceived_12(request, response){
  $equals_4(response.xmlHttpRequest.responseText, 'EmailTester.SUCESS')?$onSuccess_1(this.this$0.callback, this.EMAIL_TEST_SUCCESS):$equals_4(response.xmlHttpRequest.responseText, 'EmailTester.FAIL') && $onFailure(this.this$0.callback, new Exception_1(this.EMAIL_TEST_FAIL));
}
;
_.this$0 = null;
function $setAuthenticate(this$static, authenticate){
  this$static.authenticate = authenticate;
}

function $setDefaultFrom(this$static, defaultFrom){
  this$static.defaultFrom = defaultFrom;
}

function $setFromName(this$static, fromName){
  this$static.fromName = fromName;
}

function $setPassword(this$static, password){
  this$static.password = password;
}

function $setSmtpHost(this$static, smtpHost){
  this$static.smtpHost = smtpHost;
}

function $setSmtpPort(this$static, smtpPort){
  this$static.smtpPort = smtpPort;
}

function $setSmtpProtocol(this$static, smtpProtocol){
  this$static.smtpProtocol = smtpProtocol;
}

function $setUseSsl(this$static, useSsl){
  this$static.useSsl = useSsl;
}

function $setUseStartTls(this$static, useStartTls){
  this$static.useStartTls = useStartTls;
}

function $setUserId(this$static, userId){
  this$static.userId = userId;
}

function parseEmailConfig(json){
  var obj = eval('(' + json + ')');
  return obj;
}

function $initializeActionBaseSecurityElements(this$static, roleMappings){
  var i, j, jsLogicalRoles, k, logicalRoleMap, logicalRoles, permCB, roleName;
  logicalRoleMap = $parseRoleMappings(escapeJsonForEval(roleMappings));
  if (this$static.logicalRoles_0.size_1() == 0) {
    for (i = 0; i < logicalRoleMap.localizedRoleNames.length; ++i) {
      permCB = new CheckBox_2(logicalRoleMap.localizedRoleNames[i].localizedName);
      $addValueChangeHandler_0(permCB, new PermissionsPanel$RolesValueChangeListener_0(this$static));
      $add_17(this$static, permCB);
      this$static.logicalRoles_0.put(logicalRoleMap.localizedRoleNames[i].localizedName, new PermissionsPanel$LogicalRoleInfo_0(logicalRoleMap.localizedRoleNames[i].roleName, permCB));
    }
  }
  for (j = 0; j < logicalRoleMap.assignments.length; ++j) {
    roleName = logicalRoleMap.assignments[j].roleName;
    logicalRoles = new ArrayList_0;
    jsLogicalRoles = logicalRoleMap.assignments[j].logicalRoles;
    if (jsLogicalRoles) {
      for (k = 0; k < jsLogicalRoles.length; ++k) {
        $add_13(logicalRoles, jsLogicalRoles[k]);
      }
    }
    this$static.masterRoleMap.put(roleName, logicalRoles);
  }
}

function $parseRoleMappings(json){
  var arr = [];
  var obj = eval('(' + json + ')');
  if (obj != null) {
    if (obj.assignments.constructor.toString().indexOf('Array') == -1) {
      arr.push(obj.assignments);
      obj.assignments = arr;
    }
    for (var i = 0; i < obj.assignments.length; i++) {
      arr = [];
      if (obj.assignments[i].logicalRoles == undefined)
        continue;
      if (obj.assignments[i].logicalRoles.constructor.toString().indexOf('Array') == -1) {
        arr.push(obj.assignments[i].logicalRoles);
        obj.assignments[i].logicalRoles = arr;
      }
    }
    if (obj.localizedRoleNames.constructor.toString().indexOf('Array') == -1) {
      arr = [];
      arr.push(obj.localizedRoleNames);
      obj.localizedRoleNames = arr;
    }
  }
  return obj;
}

function $saveSecuritySettings(this$static){
  var jsLogicalRoleAssignments, jsLogicalRoles, jsNewRoleAssignments, jsRoleAssignment, logicalRoleName, logicalRoleName$iterator, roleAssignment, roleAssignment$iterator, saveSettingRequestBuilder, x, y;
  jsNewRoleAssignments = new JSONObject_0;
  jsLogicalRoleAssignments = new JSONArray_0;
  x = 0;
  for (roleAssignment$iterator = this$static.newRoleAssignments.entrySet_0().iterator_0(); roleAssignment$iterator.hasNext();) {
    roleAssignment = dynamicCast(roleAssignment$iterator.next_0(), Q$Map$Entry);
    jsLogicalRoles = new JSONArray_0;
    y = 0;
    for (logicalRoleName$iterator = dynamicCast(roleAssignment.getValue_0(), Q$List).iterator_0(); logicalRoleName$iterator.hasNext();) {
      logicalRoleName = dynamicCast(logicalRoleName$iterator.next_0(), Q$String);
      $set_1(jsLogicalRoles, y++, new JSONString_0(logicalRoleName));
    }
    jsRoleAssignment = new JSONObject_0;
    $put_1(jsRoleAssignment, 'roleName', new JSONString_0(dynamicCast(roleAssignment.getKey(), Q$String)));
    $put_1(jsRoleAssignment, 'logicalRoles', jsLogicalRoles);
    $set_1(jsLogicalRoleAssignments, x++, jsRoleAssignment);
  }
  $put_1(jsNewRoleAssignments, 'assignments', jsLogicalRoleAssignments);
  saveSettingRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), getHostPageBaseURL() + 'api/userroledao/roleAssignments');
  $setHeader(saveSettingRequestBuilder, 'Content-Type', 'application/json');
  $setHeader(saveSettingRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  try {
    $sendRequest(saveSettingRequestBuilder, $toString_4(jsNewRoleAssignments), new PermissionsPanel$2_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $setSelectedPermissions(this$static){
  var t;
  t = new PermissionsPanel$1_0(this$static);
  $scheduleRepeating(t, 100);
}

function PermissionsPanel_0(rolesListBox){
  VerticalPanel_0.call(this);
  this.logicalRoles_0 = new HashMap_0;
  this.masterRoleMap = new HashMap_0;
  this.newRoleAssignments = new HashMap_0;
  $add_17(this, new Label_2(getString('absCaption')));
  this.rolesListBox = rolesListBox;
}

defineSeed(1148, 777, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$InsertPanel, Q$IsWidget, Q$Panel, Q$UIObject, Q$VerticalPanel, Q$Widget]), PermissionsPanel_0);
_.rolesListBox = null;
function PermissionsPanel$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

defineSeed(1149, 36, makeCastMap([Q$Timer]), PermissionsPanel$1_0);
_.run = function run_8(){
  var logicalRoleAssignments, logicalRoleInfo, logicalRoleInfo$iterator, roleName, selectedIndex;
  selectedIndex = this.this$0.rolesListBox.element.selectedIndex;
  if (selectedIndex >= 0) {
    roleName = $getItemText(this.this$0.rolesListBox, selectedIndex);
    logicalRoleAssignments = dynamicCast(this.this$0.newRoleAssignments.get_0(roleName), Q$List);
    !logicalRoleAssignments && (logicalRoleAssignments = dynamicCast(this.this$0.masterRoleMap.get_0(roleName), Q$List));
    for (logicalRoleInfo$iterator = $iterator_0($values(this.this$0.logicalRoles_0)); logicalRoleInfo$iterator.val$outerIter.hasNext();) {
      logicalRoleInfo = dynamicCast($next_7(logicalRoleInfo$iterator), Q$PermissionsPanel$LogicalRoleInfo);
      $setValue_1(logicalRoleInfo.checkBox, ($clinit_Boolean() , !!logicalRoleAssignments && logicalRoleAssignments.contains_0(logicalRoleInfo.roleName_0)?TRUE_3:FALSE_3));
    }
  }
}
;
_.this$0 = null;
function PermissionsPanel$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1150, 1, {}, PermissionsPanel$2_0);
_.onError = function onError_13(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_13(request, response){
  if ($getStatusCode(response) == 200) {
    $putAll(this.this$0.masterRoleMap, this.this$0.newRoleAssignments);
    this.this$0.newRoleAssignments.clear();
  }
}
;
_.this$0 = null;
function PermissionsPanel$LogicalRoleInfo_0(roleName, checkBox){
  this.roleName_0 = roleName;
  this.checkBox = checkBox;
}

defineSeed(1151, 1, makeCastMap([Q$PermissionsPanel$LogicalRoleInfo]), PermissionsPanel$LogicalRoleInfo_0);
_.checkBox = null;
_.roleName_0 = null;
function PermissionsPanel$RolesValueChangeListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1152, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), PermissionsPanel$RolesValueChangeListener_0);
_.onValueChange = function onValueChange_6(event_0){
  var logicalRoleInfo, logicalRoleInfo$iterator, originalRoles, runtimeRole, selectedLogicalRoles;
  if (this.this$0.rolesListBox.element.selectedIndex >= 0) {
    selectedLogicalRoles = new ArrayList_0;
    for (logicalRoleInfo$iterator = $iterator_0($values(this.this$0.logicalRoles_0)); logicalRoleInfo$iterator.val$outerIter.hasNext();) {
      logicalRoleInfo = dynamicCast($next_7(logicalRoleInfo$iterator), Q$PermissionsPanel$LogicalRoleInfo);
      $getValue_0(logicalRoleInfo.checkBox).value_0 && $add_13(selectedLogicalRoles, logicalRoleInfo.roleName_0);
    }
    runtimeRole = $getItemText(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex);
    originalRoles = dynamicCast(this.this$0.masterRoleMap.get_0(runtimeRole), Q$List);
    (!originalRoles || originalRoles.size_1() == 0) && selectedLogicalRoles.size_0 == 0?this.this$0.newRoleAssignments.remove_4(runtimeRole):!!originalRoles && originalRoles.containsAll(selectedLogicalRoles) && $containsAll(selectedLogicalRoles, originalRoles)?this.this$0.newRoleAssignments.remove_4(runtimeRole):this.this$0.newRoleAssignments.put(runtimeRole, selectedLogicalRoles);
    $saveSecuritySettings(this.this$0);
  }
}
;
_.this$0 = null;
function $getButtonPanel_0(this$static){
  var hp;
  hp = new HorizontalPanel_0;
  hp.add_1(this$static.acceptBtn);
  $setCellWidth(hp, this$static.acceptBtn, '100%');
  $setCellHorizontalAlignment(hp, this$static.acceptBtn, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  hp.add_1(this$static.cancelBtn);
  return hp;
}

function RoleDialog_0(controller){
  var textBoxChangeHandler;
  GwtDialog_0.call(this);
  this.acceptBtn = new Button_1(getString('ok'));
  this.cancelBtn = new Button_1(getString('cancel'));
  this.width_1 = 260;
  this.height_1 = 140;
  $getButtonPanel_0(this);
  $setTitle_2(this, getString('newRole'));
  $setEnabled(this.acceptBtn, false);
  this.roleNameTextBox = new TextBox_0;
  $setWidth(this.roleNameTextBox, '240px');
  textBoxChangeHandler = new RoleDialog$TextBoxValueChangeHandler_0(this);
  $addDomHandler(this.roleNameTextBox, textBoxChangeHandler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
  $setStylePrimaryName(this.acceptBtn, 'pentaho-button');
  $addDomHandler(this.acceptBtn, new RoleDialog$AcceptListener_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $setStylePrimaryName(this.cancelBtn, 'pentaho-button');
  $addDomHandler(this.cancelBtn, new RoleDialog$CancelListener_0(this), TYPE_1);
  this.controller_0 = controller;
}

defineSeed(1153, 1104, makeCastMap([Q$XulComponent, Q$XulContainer, Q$XulEventSource, Q$XulDialog, Q$XulRoot, Q$Element_0, Q$AbstractGwtXulComponent, Q$GwtDomElement, Q$GwtDialog]), RoleDialog_0);
_.getButtonPanel = function getButtonPanel_2(){
  return $getButtonPanel_0(this);
}
;
_.getDialogContents = function getDialogContents_2(){
  var hp, hspacer, nameLabel, vp, vspacer;
  hp = new HorizontalPanel_0;
  hspacer = new SimplePanel_0;
  hspacer.setWidth_0('10px');
  hp.add_1(hspacer);
  vp = new VerticalPanel_0;
  hp.add_1(vp);
  vspacer = new SimplePanel_0;
  vspacer.setHeight_0('10px');
  $add_17(vp, vspacer);
  nameLabel = new Label_2(getString('name') + ':');
  $add_17(vp, nameLabel);
  $add_17(vp, this.roleNameTextBox);
  return hp;
}
;
_.controller_0 = null;
_.roleNameTextBox = null;
function RoleDialog$AcceptListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1154, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), RoleDialog$AcceptListener_0);
_.onClick = function onClick_36(event_0){
  var name_0;
  name_0 = $getPropertyString(this.this$0.roleNameTextBox.element, 'value');
  $saveRole(this.this$0.controller_0, name_0);
  $hide_2(this.this$0);
}
;
_.this$0 = null;
function RoleDialog$CancelListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1155, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), RoleDialog$CancelListener_0);
_.onClick = function onClick_37(event_0){
  $hide_2(this.this$0);
}
;
_.this$0 = null;
function RoleDialog$TextBoxValueChangeHandler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1156, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), RoleDialog$TextBoxValueChangeHandler_0);
_.onKeyUp = function onKeyUp_13(evt){
  var isEnabled, name_0;
  name_0 = $getPropertyString(this.this$0.roleNameTextBox.element, 'value');
  isEnabled = !(null == name_0 || $equals_4('', $trim(name_0)));
  $setEnabled(this.this$0.acceptBtn, isEnabled);
}
;
_.this$0 = null;
function $getButtonPanel_1(this$static){
  var hp;
  hp = new HorizontalPanel_0;
  hp.add_1(this$static.acceptBtn);
  $setCellWidth(hp, this$static.acceptBtn, '100%');
  $setCellHorizontalAlignment(hp, this$static.acceptBtn, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  hp.add_1(this$static.cancelBtn);
  return hp;
}

function UserDialog_0(controller){
  var textBoxChangeHandler;
  GwtDialog_0.call(this);
  this.acceptBtn = new Button_1(getString('ok'));
  this.cancelBtn = new Button_1(getString('cancel'));
  this.width_1 = 260;
  this.height_1 = 220;
  $getButtonPanel_1(this);
  $setTitle_2(this, getString('newUser'));
  $setEnabled(this.acceptBtn, false);
  this.nameTextBox = new TextBox_0;
  $setWidth(this.nameTextBox, '240px');
  this.passwordTextBox = new PasswordTextBox_0;
  $setWidth(this.passwordTextBox, '240px');
  this.reTypePasswordTextBox = new PasswordTextBox_0;
  $setWidth(this.reTypePasswordTextBox, '240px');
  textBoxChangeHandler = new UserDialog$TextBoxValueChangeHandler_0(this);
  $addDomHandler(this.nameTextBox, textBoxChangeHandler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
  $addDomHandler(this.passwordTextBox, textBoxChangeHandler, TYPE_5);
  $addDomHandler(this.reTypePasswordTextBox, textBoxChangeHandler, TYPE_5);
  $setStylePrimaryName(this.acceptBtn, 'pentaho-button');
  $addDomHandler(this.acceptBtn, new UserDialog$AcceptListener_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $setStylePrimaryName(this.cancelBtn, 'pentaho-button');
  $addDomHandler(this.cancelBtn, new UserDialog$CancelListener_0(this), TYPE_1);
  this.controller_0 = controller;
}

defineSeed(1157, 1104, makeCastMap([Q$XulComponent, Q$XulContainer, Q$XulEventSource, Q$XulDialog, Q$XulRoot, Q$Element_0, Q$AbstractGwtXulComponent, Q$GwtDomElement, Q$GwtDialog]), UserDialog_0);
_.getButtonPanel = function getButtonPanel_3(){
  return $getButtonPanel_1(this);
}
;
_.getDialogContents = function getDialogContents_3(){
  var hp, hspacer, nameLabel, passwordLabel, reTypePasswordLabel, vp, vspacer;
  hp = new HorizontalPanel_0;
  hspacer = new SimplePanel_0;
  hspacer.setWidth_0('10px');
  hp.add_1(hspacer);
  vp = new VerticalPanel_0;
  hp.add_1(vp);
  vspacer = new SimplePanel_0;
  vspacer.setHeight_0('10px');
  $add_17(vp, vspacer);
  nameLabel = new Label_2(getString('userName') + ':');
  $add_17(vp, nameLabel);
  $add_17(vp, this.nameTextBox);
  passwordLabel = new Label_2(getString('password') + ':');
  $add_17(vp, passwordLabel);
  $add_17(vp, this.passwordTextBox);
  reTypePasswordLabel = new Label_2(getString('retypePassword') + ':');
  $add_17(vp, reTypePasswordLabel);
  $add_17(vp, this.reTypePasswordTextBox);
  return hp;
}
;
_.controller_0 = null;
_.nameTextBox = null;
_.passwordTextBox = null;
_.reTypePasswordTextBox = null;
function UserDialog$AcceptListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1158, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserDialog$AcceptListener_0);
_.onClick = function onClick_38(event_0){
  var name_0, password;
  name_0 = $getPropertyString(this.this$0.nameTextBox.element, 'value');
  password = $getPropertyString(this.this$0.passwordTextBox.element, 'value');
  $saveUser(this.this$0.controller_0, name_0, password);
  $hide_2(this.this$0);
}
;
_.this$0 = null;
function UserDialog$CancelListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1159, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserDialog$CancelListener_0);
_.onClick = function onClick_39(event_0){
  $hide_2(this.this$0);
}
;
_.this$0 = null;
function UserDialog$TextBoxValueChangeHandler_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1160, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), UserDialog$TextBoxValueChangeHandler_0);
_.onKeyUp = function onKeyUp_14(evt){
  var isEnabled, name_0, password, reTypePassword;
  name_0 = $getPropertyString(this.this$0.nameTextBox.element, 'value');
  password = $getPropertyString(this.this$0.passwordTextBox.element, 'value');
  reTypePassword = $getPropertyString(this.this$0.reTypePasswordTextBox.element, 'value');
  isEnabled = !(null == name_0 || $equals_4('', $trim(name_0))) && !(null == password || $equals_4('', $trim(password))) && $equals_4(password, reTypePassword);
  $setEnabled(this.this$0.acceptBtn, isEnabled);
}
;
_.this$0 = null;
function $clinit_UserRolesAdminPanel(){
  $clinit_UserRolesAdminPanel = nullMethod;
  addButtonStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['pentaho-addbutton']);
  removeButtonStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['pentaho-deletebutton']);
  accumAddButtonStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-accum-add']);
  accumAddAllButtonStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-accum-add-all']);
  accumRemoveButtonStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-accum-remove']);
  accumRemoveAllButtonStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-accum-remove-all']);
  new UserRolesAdminPanel_0;
}

function $createRolesPanel(this$static){
  var arrowsPanel, availableMembersPanel, availablePanel, detailsPanel, hSpacer, labelAndButtonsPanel, mainRolesPanel, selectedMembersPanel, usersLabel, vSpacer;
  mainRolesPanel = new HorizontalPanel_0;
  mainRolesPanel.element.id = 'admin-roles-panel';
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('15px');
  mainRolesPanel.add_1(hSpacer);
  availablePanel = new VerticalPanel_0;
  mainRolesPanel.add_1(availablePanel);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('15px');
  $add_17(availablePanel, hSpacer);
  labelAndButtonsPanel = new HorizontalPanel_0;
  labelAndButtonsPanel.setWidth_0('100%');
  $add_17(availablePanel, labelAndButtonsPanel);
  labelAndButtonsPanel.add_1(new Label_2(getString('roles')));
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('100%');
  labelAndButtonsPanel.add_1(hSpacer);
  $setCellWidth(labelAndButtonsPanel, hSpacer, '100%');
  this$static.newRoleButton = new ThemeableImageButton_0(addButtonStyles);
  labelAndButtonsPanel.add_1(this$static.newRoleButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('7px');
  labelAndButtonsPanel.add_1(hSpacer);
  this$static.deleteRoleButton = new ThemeableImageButton_0(removeButtonStyles);
  labelAndButtonsPanel.add_1(this$static.deleteRoleButton);
  this$static.rolesListBox = new ListBox_1(true);
  $add_17(availablePanel, this$static.rolesListBox);
  $setVisibleItemCount(this$static.rolesListBox, 20);
  $addStyleName(this$static.rolesListBox, 'users-roles-list');
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('24px');
  mainRolesPanel.add_1(hSpacer);
  detailsPanel = new VerticalPanel_0;
  mainRolesPanel.add_1(detailsPanel);
  $setCellWidth(mainRolesPanel, detailsPanel, '100%');
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('15px');
  $add_17(detailsPanel, hSpacer);
  this$static.rolesPermissionsPanel = new PermissionsPanel_0(this$static.rolesListBox);
  $add_17(detailsPanel, this$static.rolesPermissionsPanel);
  this$static.usersLabelPanel = new VerticalPanel_0;
  usersLabel = new Label_2(getString('users'));
  usersLabel.element['className'] = 'pentaho-fieldgroup-minor';
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('15px');
  $add_17(this$static.usersLabelPanel, hSpacer);
  $add_17(this$static.usersLabelPanel, usersLabel);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('15px');
  $add_17(this$static.usersLabelPanel, hSpacer);
  $add_17(detailsPanel, this$static.usersLabelPanel);
  this$static.usersPanel = new HorizontalPanel_0;
  $add_17(detailsPanel, this$static.usersPanel);
  availableMembersPanel = new VerticalPanel_0;
  this$static.usersPanel.add_1(availableMembersPanel);
  $add_17(availableMembersPanel, new Label_2(getString('available') + ':'));
  this$static.availableMembersListBox = new ListBox_1(true);
  $add_17(availableMembersPanel, this$static.availableMembersListBox);
  $setVisibleItemCount(this$static.availableMembersListBox, 20);
  $addStyleName(this$static.availableMembersListBox, 'users-roles-selection-list');
  vSpacer = new VerticalPanel_0;
  vSpacer.element.style['width'] = '15px';
  this$static.usersPanel.add_1(vSpacer);
  arrowsPanel = new VerticalPanel_0;
  this$static.usersPanel.add_1(arrowsPanel);
  arrowsPanel.element.style['width'] = '35px';
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('80px');
  $add_17(arrowsPanel, hSpacer);
  this$static.addUserButton = new ThemeableImageButton_0(accumAddButtonStyles);
  $add_17(arrowsPanel, this$static.addUserButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('10px');
  $add_17(arrowsPanel, hSpacer);
  this$static.removeUserButton = new ThemeableImageButton_0(accumRemoveButtonStyles);
  $add_17(arrowsPanel, this$static.removeUserButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('30px');
  $add_17(arrowsPanel, hSpacer);
  this$static.addAllUsersButton = new ThemeableImageButton_0(accumAddAllButtonStyles);
  $add_17(arrowsPanel, this$static.addAllUsersButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('10px');
  $add_17(arrowsPanel, hSpacer);
  this$static.removeAllUsersButton = new ThemeableImageButton_0(accumRemoveAllButtonStyles);
  $add_17(arrowsPanel, this$static.removeAllUsersButton);
  selectedMembersPanel = new VerticalPanel_0;
  this$static.usersPanel.add_1(selectedMembersPanel);
  $add_17(selectedMembersPanel, new Label_2(getString('selected') + ':'));
  this$static.selectedMembersListBox = new ListBox_1(true);
  $add_17(selectedMembersPanel, this$static.selectedMembersListBox);
  $setVisibleItemCount(this$static.selectedMembersListBox, 20);
  $addStyleName(this$static.selectedMembersListBox, 'users-roles-selection-list');
  return mainRolesPanel;
}

function $createUsersPanel(this$static){
  var arrowsPanel, availablePanel, availableRolesPanel, detailsPanel, groupsPanel, hSpacer, labelAndButtonsPanel, mainUsersPanel, passwordPanel, roleLabel, selectedRolesPanel, vSpacer;
  mainUsersPanel = new HorizontalPanel_0;
  mainUsersPanel.element.id = 'admin-users-panel';
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('15px');
  mainUsersPanel.add_1(hSpacer);
  availablePanel = new VerticalPanel_0;
  mainUsersPanel.add_1(availablePanel);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('15px');
  $add_17(availablePanel, hSpacer);
  labelAndButtonsPanel = new HorizontalPanel_0;
  labelAndButtonsPanel.setWidth_0('100%');
  $add_17(availablePanel, labelAndButtonsPanel);
  labelAndButtonsPanel.add_1(new Label_2(getString('usersColon')));
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('100%');
  labelAndButtonsPanel.add_1(hSpacer);
  $setCellWidth(labelAndButtonsPanel, hSpacer, '100%');
  this$static.newUserButton = new ThemeableImageButton_0(addButtonStyles);
  labelAndButtonsPanel.add_1(this$static.newUserButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('7px');
  labelAndButtonsPanel.add_1(hSpacer);
  this$static.deleteUserButton = new ThemeableImageButton_0(removeButtonStyles);
  labelAndButtonsPanel.add_1(this$static.deleteUserButton);
  this$static.usersListBox = new ListBox_1(true);
  $addStyleName(this$static.usersListBox, 'users-roles-list');
  $add_17(availablePanel, this$static.usersListBox);
  $setVisibleItemCount(this$static.usersListBox, 20);
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('24px');
  mainUsersPanel.add_1(hSpacer);
  detailsPanel = new VerticalPanel_0;
  mainUsersPanel.add_1(detailsPanel);
  $setCellWidth(mainUsersPanel, detailsPanel, '100%');
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('32px');
  $add_17(detailsPanel, hSpacer);
  $add_17(detailsPanel, new Label_2(getString('password') + ':'));
  this$static.userPasswordTextBox = new PasswordTextBox_0;
  $setEnabled(this$static.userPasswordTextBox, false);
  $setWidth(this$static.userPasswordTextBox, '200px');
  passwordPanel = new HorizontalPanel_0;
  passwordPanel.add_1(this$static.userPasswordTextBox);
  hSpacer = new SimplePanel_0;
  hSpacer.setWidth_0('10px');
  passwordPanel.add_1(hSpacer);
  this$static.editPasswordButton = new Button_1(getString('edit') + '...');
  $setStylePrimaryName(this$static.editPasswordButton, 'pentaho-button');
  $setEnabled(this$static.editPasswordButton, false);
  passwordPanel.add_1(this$static.editPasswordButton);
  $add_17(detailsPanel, passwordPanel);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('15px');
  $add_17(detailsPanel, hSpacer);
  roleLabel = new Label_2(getString('roles'));
  roleLabel.element['className'] = 'pentaho-fieldgroup-minor';
  $add_17(detailsPanel, roleLabel);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('15px');
  $add_17(detailsPanel, hSpacer);
  groupsPanel = new HorizontalPanel_0;
  $add_17(detailsPanel, groupsPanel);
  availableRolesPanel = new VerticalPanel_0;
  groupsPanel.add_1(availableRolesPanel);
  $add_17(availableRolesPanel, new Label_2(getString('available') + ':'));
  this$static.availableRolesListBox = new ListBox_1(true);
  $add_17(availableRolesPanel, this$static.availableRolesListBox);
  $setVisibleItemCount(this$static.availableRolesListBox, 20);
  $addStyleName(this$static.availableRolesListBox, 'users-roles-selection-list');
  vSpacer = new VerticalPanel_0;
  vSpacer.element.style['width'] = '15px';
  groupsPanel.add_1(vSpacer);
  arrowsPanel = new VerticalPanel_0;
  groupsPanel.add_1(arrowsPanel);
  arrowsPanel.element.style['width'] = '35px';
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('110px');
  $add_17(arrowsPanel, hSpacer);
  this$static.addRoleButton = new ThemeableImageButton_0(accumAddButtonStyles);
  $add_17(arrowsPanel, this$static.addRoleButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('10px');
  $add_17(arrowsPanel, hSpacer);
  this$static.removeRoleButton = new ThemeableImageButton_0(accumRemoveButtonStyles);
  $add_17(arrowsPanel, this$static.removeRoleButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('30px');
  $add_17(arrowsPanel, hSpacer);
  this$static.addAllRolesButton = new ThemeableImageButton_0(accumAddAllButtonStyles);
  $add_17(arrowsPanel, this$static.addAllRolesButton);
  hSpacer = new SimplePanel_0;
  hSpacer.setHeight_0('10px');
  $add_17(arrowsPanel, hSpacer);
  this$static.removeAllRolesButton = new ThemeableImageButton_0(accumRemoveAllButtonStyles);
  $add_17(arrowsPanel, this$static.removeAllRolesButton);
  selectedRolesPanel = new VerticalPanel_0;
  groupsPanel.add_1(selectedRolesPanel);
  $add_17(selectedRolesPanel, new Label_2(getString('selected') + ':'));
  this$static.selectedRolesListBox = new ListBox_1(true);
  $add_17(selectedRolesPanel, this$static.selectedRolesListBox);
  $setVisibleItemCount(this$static.selectedRolesListBox, 20);
  $addStyleName(this$static.selectedRolesListBox, 'users-roles-selection-list');
  return mainUsersPanel;
}

function UserRolesAdminPanel_0(){
  var mainSystemRolesPanel, hSpacer, availablePanel, labelAndButtonsPanel, detailsPanel;
  $clinit_UserRolesAdminPanel();
  var mainPanel, usersRolesLabel, vSpacer;
  SimplePanel_0.call(this);
  mainPanel = new VerticalPanel_0;
  usersRolesLabel = new Label_2(getString('users') + ' / ' + getString('roles'));
  usersRolesLabel.element['className'] = 'pentaho-fieldgroup-major';
  $add_17(mainPanel, usersRolesLabel);
  vSpacer = new SimplePanel_0;
  vSpacer.setHeight_0('20px');
  $add_17(mainPanel, vSpacer);
  this.mainTabPanel = new PentahoTabPanel_0;
  $setWidth(this.mainTabPanel, '715px');
  $setHeight(this.mainTabPanel, '510px');
  this.mainTabPanel.addTab(getString('manageUsers'), '', false, $createUsersPanel(this));
  this.mainTabPanel.addTab(getString('manageRoles'), '', false, $createRolesPanel(this));
  this.mainTabPanel.addTab(getString('systemRoles'), '', false, (mainSystemRolesPanel = new HorizontalPanel_0 , mainSystemRolesPanel.element.id = 'admin-system-roles-panel' , hSpacer = new SimplePanel_0 , hSpacer.setWidth_0('15px') , mainSystemRolesPanel.add_1(hSpacer) , availablePanel = new VerticalPanel_0 , mainSystemRolesPanel.add_1(availablePanel) , hSpacer = new SimplePanel_0 , hSpacer.setHeight_0('15px') , $add_17(availablePanel, hSpacer) , labelAndButtonsPanel = new HorizontalPanel_0 , $add_17(availablePanel, labelAndButtonsPanel) , labelAndButtonsPanel.add_1(new Label_2(getString('rolesColon'))) , labelAndButtonsPanel.element['className'] = 'pentaho-fieldgroup-minor' , this.systemRolesListBox = new ListBox_1(true) , $add_17(availablePanel, this.systemRolesListBox) , $setVisibleItemCount(this.systemRolesListBox, 20) , $addStyleName(this.systemRolesListBox, 'users-roles-list') , hSpacer = new SimplePanel_0 , hSpacer.setWidth_0('24px') , mainSystemRolesPanel.add_1(hSpacer) , detailsPanel = new VerticalPanel_0 , mainSystemRolesPanel.add_1(detailsPanel) , $setCellWidth(mainSystemRolesPanel, detailsPanel, '100%') , hSpacer = new SimplePanel_0 , hSpacer.setHeight_0('15px') , $add_17(detailsPanel, hSpacer) , this.systemRolesPermissionsPanel = new PermissionsPanel_0(this.systemRolesListBox) , $add_17(detailsPanel, this.systemRolesPermissionsPanel) , mainSystemRolesPanel));
  $add_17(mainPanel, this.mainTabPanel);
  $setWidget_1(this, mainPanel);
}

defineSeed(1161, 628, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget]), UserRolesAdminPanel_0);
_.addAllRolesButton = null;
_.addAllUsersButton = null;
_.addRoleButton = null;
_.addUserButton = null;
_.availableMembersListBox = null;
_.availableRolesListBox = null;
_.deleteRoleButton = null;
_.deleteUserButton = null;
_.editPasswordButton = null;
_.mainTabPanel = null;
_.newRoleButton = null;
_.newUserButton = null;
_.removeAllRolesButton = null;
_.removeAllUsersButton = null;
_.removeRoleButton = null;
_.removeUserButton = null;
_.rolesListBox = null;
_.rolesPermissionsPanel = null;
_.selectedMembersListBox = null;
_.selectedRolesListBox = null;
_.systemRolesListBox = null;
_.systemRolesPermissionsPanel = null;
_.userPasswordTextBox = null;
_.usersLabelPanel = null;
_.usersListBox = null;
_.usersPanel = null;
var accumAddAllButtonStyles, accumAddButtonStyles, accumRemoveAllButtonStyles, accumRemoveButtonStyles, addButtonStyles, removeButtonStyles;
function $clinit_UserRolesAdminPanelController(){
  $clinit_UserRolesAdminPanelController = nullMethod;
  $clinit_UserRolesAdminPanel();
  instance_8 = new UserRolesAdminPanelController_0;
}

function $activate_0(this$static){
  var executableTypesRequestBuilder, url;
  $processLDAPOrJDBCmode(this$static);
  $initializeActionBaseSecurityElements_0(this$static);
  $initializeAvailableUsers(this$static, null);
  url = getHostPageBaseURL() + 'api/system/authentication-provider';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/json');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$14_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $checkForError(title, response){
  var messageBox;
  if (!!response && response.xmlHttpRequest.responseText != null && response.xmlHttpRequest.responseText.length > 0) {
    messageBox = new GwtMessageBox_0;
    messageBox.title_0 = title;
    $setMessage_2(messageBox, response.xmlHttpRequest.responseText);
    messageBox.setAcceptLabel(getString('close'));
    messageBox.width_1 = 300;
    $show_3(messageBox);
  }
}

function $deleteRoles(this$static){
  var e, executableTypesRequestBuilder, i, selectedRoles, serviceUrl;
  selectedRoles = '';
  for (i = 0; i < this$static.rolesListBox.element.options.length; ++i) {
    $isItemSelected(this$static.rolesListBox, i) && (selectedRoles = selectedRoles + $encodeUri($getValue_1(this$static.rolesListBox, i)) + '|');
  }
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/deleteRoles?roleNames=' + selectedRoles;
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$3_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $deleteUsers(this$static){
  var e, executableTypesRequestBuilder, i, selectedUsers, serviceUrl;
  selectedUsers = '';
  for (i = 0; i < this$static.usersListBox.element.options.length; ++i) {
    $isItemSelected(this$static.usersListBox, i) && (selectedUsers = selectedUsers + $encodeUri($getValue_1(this$static.usersListBox, i)) + '|');
  }
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/deleteUsers?userNames=' + selectedUsers;
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$4_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $displayErrorInMessageBox(title, message){
  var messageBox;
  messageBox = new GwtMessageBox_0;
  messageBox.title_0 = title;
  messageBox.message_0 = message;
  messageBox.setAcceptLabel(getString('close'));
  messageBox.width_1 = 300;
  $show_3(messageBox);
}

function $encodeUri(URI){
  return encodeURIComponent(URI);
}

function $getRolesForUser(this$static, user){
  var e, executableTypesRequestBuilder, url;
  url = getHostPageBaseURL() + 'api/userroledao/userRoles?userName=' + encodeURIComponent(user);
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/xml');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$8_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $getUsersInRole(this$static, role){
  var e, executableTypesRequestBuilder, url;
  url = getHostPageBaseURL() + 'api/userroledao/roleMembers?roleName=' + encodeURIComponent(role);
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/xml');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$9_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $hasMultiselection(listBox){
  var i, selectedIndices;
  selectedIndices = new ArrayList_0;
  for (i = 0; i < listBox.element.options.length; ++i) {
    $checkIndex(listBox, i);
    !!listBox.element.options[i].selected && $add_13(selectedIndices, valueOf_1(i));
  }
  return selectedIndices.size_0 > 1;
}

function $initializeActionBaseSecurityElements_0(this$static){
  var executableTypesRequestBuilder, url;
  url = getHostPageBaseURL() + 'api/userroledao/logicalRoleMap';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/json');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$10_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $initializeAvailableUsers(this$static, defaultValue){
  var e, executableTypesRequestBuilder, url;
  url = getHostPageBaseURL() + 'api/userroledao/users';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/xml');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$7_0(this$static, defaultValue));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $initializeRoles(defaultValue, serviceUrl, listBox){
  var e, executableTypesRequestBuilder, url;
  url = getHostPageBaseURL() + serviceUrl;
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/xml');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$6_0(listBox, defaultValue));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $modifyRoleUsers(this$static, roleName, serviceUrl){
  var e, executableTypesRequestBuilder;
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$13_0(this$static, roleName));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $modifyUserRoles(this$static, userName, serviceUrl){
  var e, executableTypesRequestBuilder;
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$12_0(this$static, userName));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $processLDAPOrJDBCmode(this$static){
  var executableTypesRequestBuilder, url;
  url = getHostPageBaseURL() + 'api/system/authentication-provider';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/json');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$11_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $saveRole(this$static, name_0){
  var e, executableTypesRequestBuilder, serviceUrl;
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/createRole?roleName=' + encodeURIComponent(name_0);
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $sendRequest(executableTypesRequestBuilder, null, new UserRolesAdminPanelController$2_0(this$static, name_0));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $saveUser(this$static, name_0, password){
  var e, executableTypesRequestBuilder, json, serviceUrl;
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/createUser';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $setHeader(executableTypesRequestBuilder, 'Content-Type', 'application/json');
    json = '{"userName": "' + encodeURIComponent(name_0) + '", "password": "' + encodeURIComponent(password) + '"}';
    $sendRequest(executableTypesRequestBuilder, json, new UserRolesAdminPanelController$1_0(this$static, name_0));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function $updatePassword(this$static, newPassword){
  var e, executableTypesRequestBuilder, json, serviceUrl, userName;
  userName = $getValue_1(this$static.usersListBox, this$static.usersListBox.element.selectedIndex);
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/updatePassword';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , PUT), serviceUrl);
  try {
    $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $setHeader(executableTypesRequestBuilder, 'Content-Type', 'application/json');
    json = '{"userName": "' + encodeURIComponent(userName) + '", "password": "' + encodeURIComponent(newPassword) + '"}';
    $sendRequest(executableTypesRequestBuilder, json, new UserRolesAdminPanelController$5_0);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      $displayErrorInMessageBox(getString('Error'), e.detailMessage);
    }
     else 
      throw $e0;
  }
}

function UserRolesAdminPanelController_0(){
  UserRolesAdminPanel_0.call(this);
  $addDomHandler(this.usersListBox, new UserRolesAdminPanelController$UsersListChangeListener_0(this), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  $addDomHandler(this.rolesListBox, new UserRolesAdminPanelController$RolesListChangeListener_0(this), TYPE_0);
  $addDomHandler(this.systemRolesListBox, new UserRolesAdminPanelController$SystemRolesListChangeListener_0(this), TYPE_0);
  $addHandler_3(this.addRoleButton, new UserRolesAdminPanelController$AddRoleListener_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addHandler_3(this.removeRoleButton, new UserRolesAdminPanelController$RemoveRoleListener_0(this), TYPE_1);
  $addHandler_3(this.addAllRolesButton, new UserRolesAdminPanelController$AddAllRolesListener_0(this), TYPE_1);
  $addHandler_3(this.removeAllRolesButton, new UserRolesAdminPanelController$RemoveAllRolesListener_0(this), TYPE_1);
  $addHandler_3(this.addUserButton, new UserRolesAdminPanelController$AddUserListener_0(this), TYPE_1);
  $addHandler_3(this.removeUserButton, new UserRolesAdminPanelController$RemoveUserListener_0(this), TYPE_1);
  $addHandler_3(this.addAllUsersButton, new UserRolesAdminPanelController$AddAllUsersListener_0(this), TYPE_1);
  $addHandler_3(this.removeAllUsersButton, new UserRolesAdminPanelController$RemoveAllUsersListener_0(this), TYPE_1);
  $addHandler_3(this.newUserButton, new UserRolesAdminPanelController$NewUserListener_0(this), TYPE_1);
  $addHandler_3(this.deleteUserButton, new UserRolesAdminPanelController$DeleteUserListener_0(this), TYPE_1);
  $addHandler_3(this.newRoleButton, new UserRolesAdminPanelController$NewRoleListener_0(this), TYPE_1);
  $addHandler_3(this.deleteRoleButton, new UserRolesAdminPanelController$DeleteRoleListener_0(this), TYPE_1);
  $addDomHandler(this.editPasswordButton, new UserRolesAdminPanelController$EditPasswordListener_0(this), TYPE_1);
  $activate_0(this);
}

defineSeed(1162, 1161, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$ISysAdminPanel]), UserRolesAdminPanelController_0);
_.activate_0 = function activate_2(){
  $activate_0(this);
}
;
_.passivate_0 = function passivate_1(callback){
  $setText_6(this.userPasswordTextBox, '');
  $selectClear(this.rolesListBox.element);
  $selectClear(this.usersListBox.element);
  $selectClear(this.selectedRolesListBox.element);
  $selectClear(this.selectedMembersListBox.element);
  $selectClear(this.availableMembersListBox.element);
  $selectClear(this.availableRolesListBox.element);
  $setEnabled(this.editPasswordButton, false);
  $onSuccess_14(callback, ($clinit_Boolean() , $clinit_Boolean() , TRUE_3));
}
;
var instance_8;
function UserRolesAdminPanelController$1_0(this$0, val$name){
  this.this$0 = this$0;
  this.val$name = val$name;
}

defineSeed(1163, 1, {}, UserRolesAdminPanelController$1_0);
_.onError = function onError_14(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_14(request, response){
  $initializeAvailableUsers(this.this$0, this.val$name);
  $initializeRoles($getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex), 'api/userroledao/roles', this.this$0.rolesListBox);
}
;
_.this$0 = null;
_.val$name = null;
function UserRolesAdminPanelController$10_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1164, 1, {}, UserRolesAdminPanelController$10_0);
_.onError = function onError_15(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_15(request, response){
  var roleMappings;
  roleMappings = response.xmlHttpRequest.responseText;
  $initializeActionBaseSecurityElements(this.this$0.rolesPermissionsPanel, roleMappings);
  $initializeActionBaseSecurityElements(this.this$0.systemRolesPermissionsPanel, roleMappings);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$11_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1165, 1, {}, UserRolesAdminPanelController$11_0);
_.onError = function onError_16(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_16(request, response){
  var usingLDAPOrJDBC;
  usingLDAPOrJDBC = response.xmlHttpRequest.responseText.indexOf('ldap') != -1 || response.xmlHttpRequest.responseText.indexOf('jdbc') != -1;
  $setVisible(this.this$0.usersLabelPanel, !usingLDAPOrJDBC);
  $setVisible(this.this$0.usersPanel, !usingLDAPOrJDBC);
  $setVisible(this.this$0.newRoleButton, !usingLDAPOrJDBC);
  $setVisible(this.this$0.deleteRoleButton, !usingLDAPOrJDBC);
  if (usingLDAPOrJDBC) {
    $setVisible($getTab(this.this$0.mainTabPanel, 0), false);
    $selectTab_1(this.this$0.mainTabPanel, 1);
  }
   else {
    $setVisible($getTab(this.this$0.mainTabPanel, 0), true);
    $selectTab_1(this.this$0.mainTabPanel, 0);
  }
}
;
_.this$0 = null;
function UserRolesAdminPanelController$12_0(this$0, val$userName){
  this.this$0 = this$0;
  this.val$userName = val$userName;
}

defineSeed(1166, 1, {}, UserRolesAdminPanelController$12_0);
_.onError = function onError_17(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_17(request, response){
  $checkForError(getString('Error'), response);
  $getRolesForUser(this.this$0, this.val$userName);
  $initializeRoles($getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex), 'api/userroledao/roles', this.this$0.rolesListBox);
}
;
_.this$0 = null;
_.val$userName = null;
function UserRolesAdminPanelController$13_0(this$0, val$roleName){
  this.this$0 = this$0;
  this.val$roleName = val$roleName;
}

defineSeed(1167, 1, {}, UserRolesAdminPanelController$13_0);
_.onError = function onError_18(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_18(request, response){
  $checkForError(getString('Error'), response);
  $getUsersInRole(this.this$0, this.val$roleName);
  $initializeAvailableUsers(this.this$0, $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex));
}
;
_.this$0 = null;
_.val$roleName = null;
function UserRolesAdminPanelController$14_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1168, 1, {}, UserRolesAdminPanelController$14_0);
_.onError = function onError_19(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_19(request, response){
  var usingPentahoSecurity;
  usingPentahoSecurity = response.xmlHttpRequest.responseText.indexOf('jackrabbit') != -1;
  usingPentahoSecurity?$initializeRoles(null, 'api/userroledao/roles', this.this$0.rolesListBox):$initializeRoles(null, 'api/userrolelist/roles', this.this$0.rolesListBox);
  $initializeRoles(null, 'api/userrolelist/extraRoles', this.this$0.systemRolesListBox);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$2_0(this$0, val$name){
  this.this$0 = this$0;
  this.val$name = val$name;
}

defineSeed(1169, 1, {}, UserRolesAdminPanelController$2_0);
_.onError = function onError_20(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_20(request, response){
  $initializeRoles(this.val$name, 'api/userroledao/roles', this.this$0.rolesListBox);
  $initializeAvailableUsers(this.this$0, $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex));
}
;
_.this$0 = null;
_.val$name = null;
function UserRolesAdminPanelController$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1170, 1, {}, UserRolesAdminPanelController$3_0);
_.onError = function onError_21(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_21(request, response){
  $checkForError(getString('Error'), response);
  this.this$0.availableMembersListBox.element.options.length = 0;
  this.this$0.selectedMembersListBox.element.options.length = 0;
  $initializeRoles(null, 'api/userroledao/roles', this.this$0.rolesListBox);
  $initializeAvailableUsers(this.this$0, $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex));
}
;
_.this$0 = null;
function UserRolesAdminPanelController$4_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1171, 1, {}, UserRolesAdminPanelController$4_0);
_.onError = function onError_22(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_22(request, response){
  $checkForError(getString('Error'), response);
  $setText_6(this.this$0.userPasswordTextBox, '');
  this.this$0.availableRolesListBox.element.options.length = 0;
  this.this$0.selectedRolesListBox.element.options.length = 0;
  $setEnabled(this.this$0.editPasswordButton, false);
  $initializeAvailableUsers(this.this$0, null);
  $initializeRoles($getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex), 'api/userroledao/roles', this.this$0.rolesListBox);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$5_0(){
}

defineSeed(1172, 1, {}, UserRolesAdminPanelController$5_0);
_.onError = function onError_23(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_23(request, response){
}
;
function UserRolesAdminPanelController$6_0(val$listBox, val$defaultValue){
  this.val$listBox = val$listBox;
  this.val$defaultValue = val$defaultValue;
}

defineSeed(1173, 1, {}, UserRolesAdminPanelController$6_0);
_.onError = function onError_24(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_24(request, response){
  var doc, event_0, i, role, roleNode, roles, txt;
  $selectClear(this.val$listBox.element);
  event_0 = $createHtmlEvent($doc, 'change', false, true);
  txt = response.xmlHttpRequest.responseText;
  doc = ($clinit_XMLParser() , $parse_2(impl_6, txt));
  roles = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(doc.jsObject, 'roles')));
  for (i = 0; i < roles.getLength(); ++i) {
    roleNode = roles.item_1(i);
    role = getNodeValue((new NodeListImpl_0(getChildNodes(roleNode.jsObject))).item_1(0).jsObject);
    $addItem(this.val$listBox, role);
    if (!isEmpty_8(this.val$defaultValue)) {
      if ($equals_4(role, this.val$defaultValue)) {
        $setSelectedIndex_0(this.val$listBox, i);
        fireNativeEvent(event_0, this.val$listBox, null);
      }
    }
  }
  if (this.val$listBox.element.selectedIndex == -1 && this.val$listBox.element.options.length > 0) {
    $setSelectedIndex_0(this.val$listBox, 0);
    fireNativeEvent(event_0, this.val$listBox, null);
  }
}
;
_.val$defaultValue = null;
_.val$listBox = null;
function UserRolesAdminPanelController$7_0(this$0, val$defaultValue){
  this.this$0 = this$0;
  this.val$defaultValue = val$defaultValue;
}

defineSeed(1174, 1, {}, UserRolesAdminPanelController$7_0);
_.onError = function onError_25(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_25(request, response){
  var doc, event_0, i, txt, user, userNode, users;
  this.this$0.usersListBox.element.options.length = 0;
  event_0 = $createHtmlEvent($doc, 'change', false, true);
  txt = response.xmlHttpRequest.responseText;
  doc = ($clinit_XMLParser() , $parse_2(impl_6, txt));
  users = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(doc.jsObject, 'users')));
  for (i = 0; i < users.getLength(); ++i) {
    userNode = users.item_1(i);
    user = getNodeValue((new NodeListImpl_0(getChildNodes(userNode.jsObject))).item_1(0).jsObject);
    $addItem(this.this$0.usersListBox, user);
    if (!isEmpty_8(this.val$defaultValue)) {
      if ($equals_4(user, this.val$defaultValue)) {
        $setSelectedIndex_0(this.this$0.usersListBox, i);
        fireNativeEvent(event_0, this.this$0.usersListBox, null);
      }
    }
  }
  if (this.this$0.usersListBox.element.selectedIndex == -1 && this.this$0.usersListBox.element.options.length > 0) {
    $setSelectedIndex_0(this.this$0.usersListBox, 0);
    fireNativeEvent(event_0, this.this$0.usersListBox, null);
  }
}
;
_.this$0 = null;
_.val$defaultValue = null;
function UserRolesAdminPanelController$8_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1175, 1, {}, UserRolesAdminPanelController$8_0);
_.onError = function onError_26(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_26(request, response){
  var doc, i, role, roleNode, roles, t, txt;
  this.this$0.selectedRolesListBox.element.options.length = 0;
  txt = response.xmlHttpRequest.responseText;
  doc = ($clinit_XMLParser() , $parse_2(impl_6, txt));
  roles = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(doc.jsObject, 'roles')));
  for (i = 0; i < roles.getLength(); ++i) {
    roleNode = roles.item_1(i);
    role = getNodeValue((new NodeListImpl_0(getChildNodes(roleNode.jsObject))).item_1(0).jsObject);
    $addItem(this.this$0.selectedRolesListBox, role);
  }
  t = new UserRolesAdminPanelController$8$1_0(this);
  $scheduleRepeating(t, 100);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$8$1_0(this$1){
  $clinit_Timer();
  this.this$1 = this$1;
}

defineSeed(1176, 36, makeCastMap([Q$Timer]), UserRolesAdminPanelController$8$1_0);
_.run = function run_9(){
  var i, isSelected, j, role;
  if (this.this$1.this$0.rolesListBox.element.options.length > 0) {
    this.isRepeating?clearInterval_0(this.timerId):clearTimeout_0(this.timerId);
    timers.remove_2(this);
    this.this$1.this$0.availableRolesListBox.element.options.length = 0;
    for (i = 0; i < this.this$1.this$0.rolesListBox.element.options.length; ++i) {
      role = $getValue_1(this.this$1.this$0.rolesListBox, i);
      isSelected = false;
      for (j = 0; j < this.this$1.this$0.selectedRolesListBox.element.options.length; ++j) {
        $equals_4($getValue_1(this.this$1.this$0.selectedRolesListBox, j), role) && (isSelected = true);
      }
      isSelected || $addItem(this.this$1.this$0.availableRolesListBox, role);
    }
  }
}
;
_.this$1 = null;
function UserRolesAdminPanelController$9_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1177, 1, {}, UserRolesAdminPanelController$9_0);
_.onError = function onError_27(request, exception){
  $displayErrorInMessageBox(getString('Error'), exception.getMessage());
}
;
_.onResponseReceived = function onResponseReceived_27(request, response){
  var doc, i, t, txt, user, userNode, users;
  this.this$0.selectedMembersListBox.element.options.length = 0;
  txt = response.xmlHttpRequest.responseText;
  doc = ($clinit_XMLParser() , $parse_2(impl_6, txt));
  users = new NodeListImpl_0(($clinit_XMLParserImpl() , $getElementsByTagNameImpl(doc.jsObject, 'users')));
  for (i = 0; i < users.getLength(); ++i) {
    userNode = users.item_1(i);
    user = getNodeValue((new NodeListImpl_0(getChildNodes(userNode.jsObject))).item_1(0).jsObject);
    $addItem(this.this$0.selectedMembersListBox, user);
  }
  t = new UserRolesAdminPanelController$9$1_0(this);
  $scheduleRepeating(t, 100);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$9$1_0(this$1){
  $clinit_Timer();
  this.this$1 = this$1;
}

defineSeed(1178, 36, makeCastMap([Q$Timer]), UserRolesAdminPanelController$9$1_0);
_.run = function run_10(){
  var i, isSelected, j, user;
  if (this.this$1.this$0.usersListBox.element.options.length > 0) {
    this.isRepeating?clearInterval_0(this.timerId):clearTimeout_0(this.timerId);
    timers.remove_2(this);
    this.this$1.this$0.availableMembersListBox.element.options.length = 0;
    for (i = 0; i < this.this$1.this$0.usersListBox.element.options.length; ++i) {
      user = $getValue_1(this.this$1.this$0.usersListBox, i);
      isSelected = false;
      for (j = 0; j < this.this$1.this$0.selectedMembersListBox.element.options.length; ++j) {
        $equals_4($getValue_1(this.this$1.this$0.selectedMembersListBox, j), user) && (isSelected = true);
      }
      isSelected || $addItem(this.this$1.this$0.availableMembersListBox, user);
    }
  }
}
;
_.this$1 = null;
function UserRolesAdminPanelController$AddAllRolesListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1179, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$AddAllRolesListener_0);
_.onClick = function onClick_40(event_0){
  var serviceUrl, userName;
  userName = $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex);
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/assignAllRolesToUser?userName=' + encodeURIComponent(userName);
  $modifyUserRoles(this.this$0, userName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$AddAllUsersListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1180, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$AddAllUsersListener_0);
_.onClick = function onClick_41(event_0){
  var roleName, serviceUrl;
  roleName = $getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex);
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/assignAllUsersToRole?roleName=' + encodeURIComponent(roleName);
  $modifyRoleUsers(this.this$0, roleName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$AddRoleListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1181, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$AddRoleListener_0);
_.onClick = function onClick_42(event_0){
  var i, roleNames, serviceUrl, userName;
  userName = $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex);
  roleNames = '';
  for (i = 0; i < this.this$0.availableRolesListBox.element.options.length; ++i) {
    $isItemSelected(this.this$0.availableRolesListBox, i) && (roleNames = roleNames + $encodeUri($getValue_1(this.this$0.availableRolesListBox, i)) + '|');
  }
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/assignRoleToUser?userName=' + encodeURIComponent(userName) + '&roleNames=' + roleNames;
  $modifyUserRoles(this.this$0, userName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$AddUserListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1182, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$AddUserListener_0);
_.onClick = function onClick_43(event_0){
  var i, roleName, serviceUrl, userNames;
  roleName = $getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex);
  userNames = '';
  for (i = 0; i < this.this$0.availableMembersListBox.element.options.length; ++i) {
    $isItemSelected(this.this$0.availableMembersListBox, i) && (userNames = userNames + $encodeUri($getValue_1(this.this$0.availableMembersListBox, i)) + '|');
  }
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/assignUserToRole?userNames=' + userNames + '&roleName=' + encodeURIComponent(roleName);
  $modifyRoleUsers(this.this$0, roleName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$DeleteRoleListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1183, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$DeleteRoleListener_0);
_.onClick = function onClick_44(event_0){
  var warning;
  if (this.this$0.rolesListBox.element.selectedIndex != -1) {
    warning = new GwtConfirmBox_0;
    $setMessage_2(warning, getString('deleteRoleMessage'));
    $setTitle_2(warning, getString('deleteRoleTitle'));
    $setAcceptLabel(warning, getString('yesDelete'));
    $setCancelLabel(warning, getString('no'));
    $addDialogCallback(warning, new UserRolesAdminPanelController$DeleteRoleListener$1_0(this));
    $show_3(warning);
  }
}
;
_.this$0 = null;
function UserRolesAdminPanelController$DeleteRoleListener$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1184, 1, makeCastMap([Q$XulDialogCallback]), UserRolesAdminPanelController$DeleteRoleListener$1_0);
_.onClose_0 = function onClose_7(sender, returnCode, retVal){
  returnCode == 0 && $deleteRoles(this.this$1.this$0);
}
;
_.this$1 = null;
function UserRolesAdminPanelController$DeleteUserListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1185, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$DeleteUserListener_0);
_.onClick = function onClick_45(event_0){
  var warning;
  if (this.this$0.usersListBox.element.selectedIndex != -1) {
    warning = new GwtConfirmBox_0;
    warning.height_1 = 117;
    $setMessage_2(warning, getString('deleteUserMessage'));
    $setTitle_2(warning, getString('deleteUserTitle'));
    $setAcceptLabel(warning, getString('yesDelete'));
    $setCancelLabel(warning, getString('no'));
    $addDialogCallback(warning, new UserRolesAdminPanelController$DeleteUserListener$1_0(this));
    $show_3(warning);
  }
}
;
_.this$0 = null;
function UserRolesAdminPanelController$DeleteUserListener$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1186, 1, makeCastMap([Q$XulDialogCallback]), UserRolesAdminPanelController$DeleteUserListener$1_0);
_.onClose_0 = function onClose_8(sender, returnCode, retVal){
  returnCode == 0 && $deleteUsers(this.this$1.this$0);
}
;
_.this$1 = null;
function UserRolesAdminPanelController$EditPasswordListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1187, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$EditPasswordListener_0);
_.onClick = function onClick_46(event_0){
  var changePasswordDialog;
  changePasswordDialog = new ChangePasswordDialog_0(this.this$0);
  $show_4(changePasswordDialog);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$NewRoleListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1188, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$NewRoleListener_0);
_.onClick = function onClick_47(event_0){
  var roleDialog;
  roleDialog = new RoleDialog_0(this.this$0);
  $show_4(roleDialog);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$NewUserListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1189, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$NewUserListener_0);
_.onClick = function onClick_48(event_0){
  var userDialog;
  userDialog = new UserDialog_0(this.this$0);
  $show_4(userDialog);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$RemoveAllRolesListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1190, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$RemoveAllRolesListener_0);
_.onClick = function onClick_49(event_0){
  var serviceUrl, userName;
  userName = $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex);
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/removeAllRolesFromUser?userName=' + encodeURIComponent(userName);
  $modifyUserRoles(this.this$0, userName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$RemoveAllUsersListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1191, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$RemoveAllUsersListener_0);
_.onClick = function onClick_50(event_0){
  var roleName, serviceUrl;
  roleName = $getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex);
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/removeAllUsersFromRole?roleName=' + encodeURIComponent(roleName);
  $modifyRoleUsers(this.this$0, roleName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$RemoveRoleListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1192, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$RemoveRoleListener_0);
_.onClick = function onClick_51(event_0){
  var i, roleNames, serviceUrl, userName;
  userName = $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex);
  roleNames = '';
  for (i = 0; i < this.this$0.selectedRolesListBox.element.options.length; ++i) {
    $isItemSelected(this.this$0.selectedRolesListBox, i) && (roleNames = roleNames + $encodeUri($getValue_1(this.this$0.selectedRolesListBox, i)) + '|');
  }
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/removeRoleFromUser?userName=' + encodeURIComponent(userName) + '&roleNames=' + roleNames;
  $modifyUserRoles(this.this$0, userName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$RemoveUserListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1193, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), UserRolesAdminPanelController$RemoveUserListener_0);
_.onClick = function onClick_52(event_0){
  var i, roleName, serviceUrl, userNames;
  roleName = $getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex);
  userNames = '';
  for (i = 0; i < this.this$0.selectedMembersListBox.element.options.length; ++i) {
    $isItemSelected(this.this$0.selectedMembersListBox, i) && (userNames = userNames + $encodeUri($getValue_1(this.this$0.selectedMembersListBox, i)) + '|');
  }
  serviceUrl = getHostPageBaseURL() + 'api/userroledao/removeUserFromRole?userNames=' + userNames + '&roleName=' + encodeURIComponent(roleName);
  $modifyRoleUsers(this.this$0, roleName, serviceUrl);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$RolesListChangeListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1194, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), UserRolesAdminPanelController$RolesListChangeListener_0);
_.onChange = function onChange_6(evt){
  var role;
  if ($hasMultiselection(this.this$0.rolesListBox)) {
    this.this$0.availableMembersListBox.element.options.length = 0;
    this.this$0.selectedMembersListBox.element.options.length = 0;
  }
   else {
    role = $getValue_1(this.this$0.rolesListBox, this.this$0.rolesListBox.element.selectedIndex);
    null == role || $equals_4('', $trim(role)) || $getUsersInRole(this.this$0, role);
  }
  $setSelectedPermissions(this.this$0.rolesPermissionsPanel);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$SystemRolesListChangeListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1195, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), UserRolesAdminPanelController$SystemRolesListChangeListener_0);
_.onChange = function onChange_7(evt){
  $setSelectedPermissions(this.this$0.systemRolesPermissionsPanel);
}
;
_.this$0 = null;
function UserRolesAdminPanelController$UsersListChangeListener_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1196, 1, makeCastMap([Q$ChangeHandler, Q$EventHandler]), UserRolesAdminPanelController$UsersListChangeListener_0);
_.onChange = function onChange_8(evt){
  var user;
  if ($hasMultiselection(this.this$0.usersListBox)) {
    $setText_6(this.this$0.userPasswordTextBox, '');
    $setEnabled(this.this$0.editPasswordButton, false);
    this.this$0.availableRolesListBox.element.options.length = 0;
    this.this$0.selectedRolesListBox.element.options.length = 0;
  }
   else {
    user = $getValue_1(this.this$0.usersListBox, this.this$0.usersListBox.element.selectedIndex);
    if (!(null == user || $equals_4('', $trim(user)))) {
      $getRolesForUser(this.this$0, user);
      $setText_6(this.this$0.userPasswordTextBox, 'fakepassword');
      $setEnabled(this.this$0.editPasswordButton, true);
    }
  }
}
;
_.this$0 = null;
function $addCustomPanel(this$static, w, position){
  $add_8(this$static.scheduleEditorWizardPanel, w, position);
}

function NewScheduleDialog_1(jsJob, callback, isEmailConfValid){
  $clinit_NewScheduleDialog();
  PromptDialogBox_2.call(this, getString('newSchedule'), getString('nextStep'), getString('cancel'), false, true);
  $$init_8(this);
  this.jsJob = jsJob;
  this.filePath = $getFullResourceName(jsJob);
  this.callback = callback;
  this.isEmailConfValid = isEmailConfValid;
  $createUI(this);
}

defineSeed(1338, 987, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$MouseListener, Q$Panel, Q$PopupListener, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$EventListener_0]), NewScheduleDialog_1);
function $onBrowserEvent_8(this$static, context, parent_0, value, event_0, valueUpdater){
  var eventTarget;
  $onBrowserEvent(this$static, context, parent_0, value, event_0, valueUpdater);
  if ($equals_4('click', event_0.type)) {
    eventTarget = event_0.target;
    isOrHasChildImpl($getFirstChildElement(parent_0), eventTarget) && !!valueUpdater && valueUpdater.update(value);
  }
}

function $onEnterKeyDown(value, valueUpdater){
  !!valueUpdater && valueUpdater.update(value);
}

function $render_2(value, sb){
  !!value && ($append_7(sb.sb, value.asString()) , sb);
}

function ClickableSafeHtmlCell_0(){
  AbstractCell_0.call(this, initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['click']));
}

defineSeed(1632, 111, {}, ClickableSafeHtmlCell_0);
_.onBrowserEvent = function onBrowserEvent_39(context, parent_0, value, event_0, valueUpdater){
  $onBrowserEvent_8(this, context, parent_0, dynamicCast(value, Q$SafeHtml), event_0, valueUpdater);
}
;
_.onEnterKeyDown = function onEnterKeyDown_0(context, parent_0, value, event_0, valueUpdater){
  $onEnterKeyDown(dynamicCast(value, Q$SafeHtml), valueUpdater);
}
;
_.render = function render_0(context, value, sb){
  $render_2(dynamicCast(value, Q$SafeHtml), sb);
}
;
function $getAfterDate(this$static){
  if ($getValue_0(this$static.afterCheckBox).value_0) {
    return $getDate_0(this$static.afterDateBox);
  }
  return null;
}

function $getBeforeDate(this$static){
  if ($getValue_0(this$static.beforeCheckBox).value_0) {
    return $getDate_0(this$static.beforeDateBox);
  }
  return null;
}

function $getStateFilter(this$static){
  return $getItemText(this$static.scheduleStateListBox, this$static.scheduleStateListBox.element.selectedIndex);
}

function $getTypeFilter(this$static){
  return $getItemText(this$static.scheduleTypeListBox, this$static.scheduleTypeListBox.element.selectedIndex);
}

function $getUserFilter(this$static){
  return $getItemText(this$static.userListBox, this$static.userListBox.element.selectedIndex);
}

function $initUI_0(this$static, jobs){
  var executionFilterCaptionPanel, executionFilterPanel, filterPanel, i, selectedIndex, uniqueUsers, user, user$iterator;
  if (jobs) {
    for (i = 0; i < jobs.length; ++i) {
      $add_14(this$static.resourceOracle, $getShortResourceName(jobs[i]));
    }
  }
  $setWidth(this$static.resourceSuggestBox, '240px');
  $setWidth(this$static.userListBox, '200px');
  $setWidth(this$static.scheduleStateListBox, '200px');
  $setWidth(this$static.scheduleTypeListBox, '200px');
  executionFilterCaptionPanel = new CaptionPanel_1(getString('executionTime'));
  executionFilterPanel = new FlexTable_1;
  $setWidget_4(executionFilterPanel, 0, 0, this$static.beforeCheckBox);
  $setWidget_4(executionFilterPanel, 0, 1, this$static.beforeDateBox);
  $setWidget_4(executionFilterPanel, 1, 0, this$static.afterCheckBox);
  $setWidget_4(executionFilterPanel, 1, 1, this$static.afterDateBox);
  $add_7(dynamicCast(executionFilterCaptionPanel.widget, Q$SimplePanel), executionFilterPanel);
  $addValueChangeHandler_0(this$static.afterCheckBox, new FilterDialog$1_0(this$static));
  $addValueChangeHandler_0(this$static.beforeCheckBox, new FilterDialog$2_0(this$static));
  $setEnabled_3(this$static.beforeDateBox, $getValue_0(this$static.beforeCheckBox).value_0);
  $setEnabled_3(this$static.afterDateBox, $getValue_0(this$static.afterCheckBox).value_0);
  selectedIndex = this$static.userListBox.element.selectedIndex;
  $selectClear(this$static.userListBox.element);
  $addItem(this$static.userListBox, 'ALL');
  uniqueUsers = new HashSet_0;
  if (jobs) {
    for (i = 0; i < jobs.length; ++i) {
      $add_20(uniqueUsers, jobs[i].userName);
    }
  }
  for (user$iterator = $iterator($keySet_0(uniqueUsers.map)); user$iterator.val$outerIter.hasNext();) {
    user = dynamicCast($next_6(user$iterator), Q$String);
    $addItem(this$static.userListBox, user);
  }
  $setSelectedIndex_0(this$static.userListBox, selectedIndex);
  $setVisibleItemCount(this$static.scheduleStateListBox, 1);
  selectedIndex = this$static.scheduleStateListBox.element.selectedIndex;
  $selectClear(this$static.scheduleStateListBox.element);
  $addItem(this$static.scheduleStateListBox, 'ALL');
  $addItem(this$static.scheduleStateListBox, 'NORMAL');
  $addItem(this$static.scheduleStateListBox, 'PAUSED');
  $addItem(this$static.scheduleStateListBox, 'COMPLETE');
  $addItem(this$static.scheduleStateListBox, 'ERROR');
  $addItem(this$static.scheduleStateListBox, 'BLOCKED');
  $addItem(this$static.scheduleStateListBox, 'UNKNOWN');
  $setSelectedIndex_0(this$static.scheduleStateListBox, selectedIndex);
  $setVisibleItemCount(this$static.scheduleTypeListBox, 1);
  selectedIndex = this$static.scheduleTypeListBox.element.selectedIndex;
  $selectClear(this$static.scheduleTypeListBox.element);
  $addItem(this$static.scheduleTypeListBox, 'ALL');
  $addItem(this$static.scheduleTypeListBox, 'DAILY');
  $addItem(this$static.scheduleTypeListBox, 'WEEKLY');
  $addItem(this$static.scheduleTypeListBox, 'MONTHLY');
  $addItem(this$static.scheduleTypeListBox, 'YEARLY');
  $setSelectedIndex_0(this$static.scheduleTypeListBox, selectedIndex);
  filterPanel = new FlexTable_1;
  $setWidget_4(filterPanel, 0, 0, new Label_2(getString('scheduledResource')));
  $setWidget_4(filterPanel, 1, 0, this$static.resourceSuggestBox);
  $setWidget_4(filterPanel, 2, 0, new Label_2(getString('_user')));
  $setWidget_4(filterPanel, 3, 0, this$static.userListBox);
  $setWidget_4(filterPanel, 4, 0, new Label_2(getString('scheduleState')));
  $setWidget_4(filterPanel, 5, 0, this$static.scheduleStateListBox);
  $setWidget_4(filterPanel, 6, 0, new Label_2(getString('scheduleType')));
  $setWidget_4(filterPanel, 7, 0, this$static.scheduleTypeListBox);
  $setWidget_4(filterPanel, 8, 0, executionFilterCaptionPanel);
  $setContent_0(this$static, filterPanel);
}

function FilterDialog_0(jobs, callback){
  PromptDialogBox_2.call(this, getString('filterSchedules'), getString('ok'), getString('cancel'), false, true);
  this.resourceOracle = new MultiWordSuggestOracle_0;
  this.resourceSuggestBox = new SuggestBox_0(this.resourceOracle);
  this.afterCheckBox = new CheckBox_2(getString('after'));
  this.beforeCheckBox = new CheckBox_2(getString('before'));
  this.afterDateBox = new DateTimePicker_0;
  this.beforeDateBox = new DateTimePicker_0;
  this.userListBox = new ListBox_1(false);
  this.scheduleStateListBox = new ListBox_1(false);
  this.scheduleTypeListBox = new ListBox_1(false);
  $initUI_0(this, jobs);
  this.callback_0 = callback;
}

defineSeed(1633, 987, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$MouseListener, Q$Panel, Q$PopupListener, Q$PopupPanel, Q$SimplePanel, Q$UIObject, Q$Widget, Q$EventListener_0]), FilterDialog_0);
function FilterDialog$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1634, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), FilterDialog$1_0);
_.onValueChange = function onValueChange_7(event_0){
  $setEnabled_3(this.this$0.afterDateBox, dynamicCast(event_0.getValue_0(), Q$Boolean).value_0);
}
;
_.this$0 = null;
function FilterDialog$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1635, 1, makeCastMap([Q$ValueChangeHandler, Q$EventHandler]), FilterDialog$2_0);
_.onValueChange = function onValueChange_8(event_0){
  $setEnabled_3(this.this$0.beforeDateBox, dynamicCast(event_0.getValue_0(), Q$Boolean).value_0);
}
;
_.this$0 = null;
function $getShortResourceName(this$static){
  var resource;
  resource = $getFullResourceName(this$static);
  resource.indexOf('/') != -1 && (resource = $substring(resource, resource.lastIndexOf('/') + 1));
  return resource;
}

function $setState_1(this$static, newState){
  this$static.state = newState;
}

function $controlJobs(this$static, jobs, function_$, method, refreshData){
  var builder, job, job$iterator, startJobRequest, url;
  for (job$iterator = $iterator($keySet_0(jobs.map)); job$iterator.val$outerIter.hasNext();) {
    job = dynamicCastJso($next_6(job$iterator));
    url = getHostPageBaseURL() + 'api/scheduler/' + function_$;
    builder = new RequestBuilder_0(method, url);
    $setHeader(builder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $setHeader(builder, 'Content-Type', 'application/json');
    startJobRequest = new JSONObject_0;
    $put_1(startJobRequest, 'jobId', new JSONString_0(job.jobId));
    try {
      $sendRequest(builder, $toString_4(startJobRequest), new SchedulesPanel$39_0(this$static, job, refreshData));
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, Q$RequestException))
        throw $e0;
    }
  }
}

function $controlScheduler(controlSchedulerButton, function_$, isScheduler){
  var builder, url;
  url = getHostPageBaseURL() + 'api/scheduler/' + function_$;
  builder = new RequestBuilder_0(($clinit_RequestBuilder() , POST), url);
  $setHeader(builder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  try {
    $sendRequest(builder, null, new SchedulesPanel$40_0(controlSchedulerButton, isScheduler));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $createUI_0(this$static, isAdmin, isScheduler){
  var bar, columnSortHandler, controlSchedulerButton, idColumn, lastFireColumn, list, nameColumn, nextFireColumn, noDataLabel, outputPathColumn, refresh, resourceColumn, scheduleColumn, selectionModel, stateColumn, tableAndPager, userNameColumn;
  this$static.table.element.id = 'schedule-table';
  $setStylePrimaryName(this$static.table, 'pentaho-table');
  $setWidth_0(this$static.table);
  !!this$static.table.headerBuilder && (this$static.table.headerBuilder.isSortIconStartOfLine = false);
  selectionModel = new MultiSelectionModel_0(new SchedulesPanel$7_0);
  $setSelectionModel(this$static.table, selectionModel);
  noDataLabel = new Label_2(getString('noSchedules'));
  noDataLabel.element['className'] = 'noDataForScheduleTable';
  $setEmptyTableWidget(this$static.table, noDataLabel);
  idColumn = new SchedulesPanel$8_0;
  idColumn.isSortable = true;
  nameColumn = new SchedulesPanel$9_0;
  nameColumn.isSortable = true;
  resourceColumn = new SchedulesPanel$10_0;
  resourceColumn.isSortable = true;
  outputPathColumn = new SchedulesPanel$11_0(new ClickableSafeHtmlCell_0);
  $setFieldUpdater(outputPathColumn, new SchedulesPanel$12_0);
  outputPathColumn.isSortable = true;
  scheduleColumn = new SchedulesPanel$13_0;
  scheduleColumn.isSortable = true;
  userNameColumn = new SchedulesPanel$14_0;
  userNameColumn.isSortable = true;
  stateColumn = new SchedulesPanel$15_0;
  stateColumn.isSortable = true;
  nextFireColumn = new SchedulesPanel$16_0;
  nextFireColumn.isSortable = true;
  lastFireColumn = new SchedulesPanel$17_0;
  lastFireColumn.isSortable = true;
  $addColumn(this$static.table, nameColumn, getString('scheduleName'));
  $addColumn(this$static.table, scheduleColumn, getString('recurrence'));
  $addColumn(this$static.table, resourceColumn, getString('sourceFile'));
  $addColumn(this$static.table, outputPathColumn, getString('outputPath'));
  $addColumn(this$static.table, lastFireColumn, getString('lastFire'));
  $addColumn(this$static.table, nextFireColumn, getString('nextFire'));
  isAdmin && $addColumn(this$static.table, userNameColumn, getString('user'));
  $addColumn(this$static.table, stateColumn, getString('state'));
  $addColumnStyleName(this$static.table, 0);
  $addColumnStyleName(this$static.table, 1);
  $addColumnStyleName(this$static.table, 2);
  $addColumnStyleName(this$static.table, 3);
  $addColumnStyleName(this$static.table, 4);
  $addColumnStyleName(this$static.table, 5);
  isAdmin && $addColumnStyleName(this$static.table, 6);
  $addColumnStyleName(this$static.table, isAdmin?7:6);
  $setColumnWidth_3(this$static.table, nameColumn, 160 + ($clinit_Style$Unit() , 'px'));
  $setColumnWidth_3(this$static.table, resourceColumn, '200px');
  $setColumnWidth_3(this$static.table, outputPathColumn, '180px');
  $setColumnWidth_3(this$static.table, scheduleColumn, '170px');
  $setColumnWidth_3(this$static.table, lastFireColumn, '130px');
  $setColumnWidth_3(this$static.table, nextFireColumn, '130px');
  isAdmin && $setColumnWidth_3(this$static.table, userNameColumn, '100px');
  $setColumnWidth_3(this$static.table, stateColumn, '70px');
  $addDataDisplay(this$static.dataProvider, this$static.table);
  list = this$static.dataProvider.listWrapper;
  columnSortHandler = new ColumnSortEvent$ListHandler_0(list);
  $setComparator(columnSortHandler, idColumn, new SchedulesPanel$18_0);
  $setComparator(columnSortHandler, nameColumn, new SchedulesPanel$19_0);
  $setComparator(columnSortHandler, resourceColumn, new SchedulesPanel$20_0);
  $setComparator(columnSortHandler, outputPathColumn, new SchedulesPanel$21_0);
  $setComparator(columnSortHandler, scheduleColumn, new SchedulesPanel$22_0);
  $setComparator(columnSortHandler, userNameColumn, new SchedulesPanel$23_0);
  $setComparator(columnSortHandler, stateColumn, new SchedulesPanel$24_0);
  $setComparator(columnSortHandler, nextFireColumn, new SchedulesPanel$25_0);
  $setComparator(columnSortHandler, lastFireColumn, new SchedulesPanel$26_0);
  $addHandler_3(this$static.table, columnSortHandler, (!TYPE_33 && (TYPE_33 = new GwtEvent$Type_0) , TYPE_33));
  $push_2(this$static.table.sortList, idColumn);
  $push_2(this$static.table.sortList, resourceColumn);
  $push_2(this$static.table.sortList, outputPathColumn);
  $push_2(this$static.table.sortList, nameColumn);
  $addSelectionChangeHandler(this$static.table.presenter.selectionModel, new SchedulesPanel$27_0(this$static, isScheduler));
  this$static.pager = new SchedulesPanel$28_0;
  $setDisplay_0(this$static.pager, this$static.table);
  tableAndPager = new VerticalPanel_0;
  $setHorizontalAlignment_3(tableAndPager, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  bar = new Toolbar_0;
  $addSpacer(bar, 10);
  $add_24(bar, 2);
  if (isAdmin) {
    controlSchedulerButton = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-start-scheduler'])));
    $setCommand_0(controlSchedulerButton, new SchedulesPanel$29_0(controlSchedulerButton, isScheduler));
    $updateControlSchedulerButtonState(controlSchedulerButton, isScheduler);
    bar.bar.add_1(controlSchedulerButton.eventWrapper);
    $add_13(bar.buttons, controlSchedulerButton);
    $addSpacer(bar, 20);
  }
  $setCommand_0(this$static.filterButton, new SchedulesPanel$30_0(this$static));
  $setToolTip(this$static.filterButton, getString('filterSchedules'));
  isAdmin && $add_27(bar, this$static.filterButton);
  $setCommand_0(this$static.filterRemoveButton, new SchedulesPanel$31_0(this$static));
  $setToolTip(this$static.filterRemoveButton, getString('removeFilters'));
  $setEnabled_9(this$static.filterRemoveButton, this$static.filters.size_0 > 0);
  isAdmin && $add_27(bar, this$static.filterRemoveButton);
  refresh = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-refresh'])));
  $setToolTip(refresh, getString('refreshTooltip'));
  $setCommand_0(refresh, new SchedulesPanel$32_0);
  bar.bar.add_1(refresh.eventWrapper);
  $add_13(bar.buttons, refresh);
  $addSpacer(bar, 20);
  $setToolTip(this$static.triggerNowButton, getString('executeNow'));
  $setCommand_0(this$static.triggerNowButton, new SchedulesPanel$33_0(this$static));
  $setEnabled_9(this$static.triggerNowButton, false);
  $add_27(bar, this$static.triggerNowButton);
  $setCommand_0(this$static.controlScheduleButton, new SchedulesPanel$34_0(this$static));
  $setEnabled_9(this$static.controlScheduleButton, false);
  $add_27(bar, this$static.controlScheduleButton);
  $addSpacer(bar, 20);
  $setCommand_0(this$static.editButton, new SchedulesPanel$35_0(this$static));
  $setEnabled_9(this$static.editButton, false);
  $setToolTip(this$static.editButton, getString('editTooltip'));
  $add_27(bar, this$static.editButton);
  $setCommand_0(this$static.scheduleRemoveButton, new SchedulesPanel$36_0(this$static));
  $setToolTip(this$static.scheduleRemoveButton, getString('remove'));
  $setEnabled_9(this$static.scheduleRemoveButton, false);
  $add_27(bar, this$static.scheduleRemoveButton);
  $add_17(tableAndPager, bar);
  $add_17(tableAndPager, this$static.table);
  $add_17(tableAndPager, this$static.pager);
  $setWidget_1(this$static, tableAndPager);
}

function $editJob(this$static, editJob){
  var executableTypesRequestBuilder, url;
  url = getHostPageBaseURL() + 'api/scheduler/jobinfo?jobId=' + $encodeUri_0(editJob.jobId);
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/json');
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new SchedulesPanel$37_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $encodeUri_0(URI){
  return encodeURIComponent(URI);
}

function $filterAndShowData(this$static){
  var filter, filter$iterator, filteredList, i, job, job$iterator, list;
  $add_13(this$static.filters, new SchedulesPanel$4_0);
  filteredList = new ArrayList_0;
  for (i = 0; i < this$static.allJobs.length; ++i) {
    $add_13(filteredList, this$static.allJobs[i]);
    for (filter$iterator = new AbstractList$IteratorImpl_0(this$static.filters); filter$iterator.i < filter$iterator.this$0_0.size_1();) {
      filter = dynamicCast($next_5(filter$iterator), Q$IJobFilter);
      filter.accept_0(this$static.allJobs[i]) || filteredList.remove_2(this$static.allJobs[i]);
    }
  }
  list = this$static.dataProvider.listWrapper;
  $clear_5(list);
  $addAll_1(list, filteredList);
  $setVisible(this$static.pager, filteredList.size_0 > 25);
  for (job$iterator = new AbstractList$IteratorImpl_0(filteredList); job$iterator.i < job$iterator.this$0_0.size_1();) {
    job = dynamicCastJso($next_5(job$iterator));
    $setSelected_1(this$static.table.presenter.selectionModel, job);
  }
  $setEnabled_9(this$static.editButton, false);
  $setEnabled_9(this$static.controlScheduleButton, false);
  $setEnabled_9(this$static.scheduleRemoveButton, false);
  $setEnabled_9(this$static.triggerNowButton, false);
  $ensurePendingState(this$static.table.presenter).redrawRequired = true;
}

function $getSelectedJobs(this$static){
  var selectedJobs;
  selectedJobs = $getSelectedSet(this$static.table.presenter.selectionModel);
  return selectedJobs;
}

function $openOutputLocation(outputLocation){
  var event_0;
  $setPerspective(($clinit_PerspectiveManager() , $clinit_PerspectiveManager() , instance_13), 'browser.perspective');
  event_0 = new GenericEvent_0;
  event_0.eventSubType = 'RefreshFolderEvent';
  event_0.stringParam = outputLocation;
  $castFireEvent(($clinit_EventBusUtil() , EVENT_BUS), event_0);
}

function $parseJson_1(json){
  var obj = eval('(' + json + ')');
  return obj.job;
}

function $parseJsonJob_0(json){
  var obj = eval('(' + json + ')');
  return obj;
}

function $promptForScheduleResourceError(this$static, job){
  var prompt_0;
  prompt_0 = new PromptDialogBox_2(getString('fileUnavailable'), getString('yesDelete'), getString('no'), false, true);
  $setContent_0(prompt_0, new HTML_1(getString_0('editScheduleResourceDoesNotExist', initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, [$getFullResourceName(job)]))));
  $setCallback(prompt_0, new SchedulesPanel$38_0(this$static, job, prompt_0));
  $setWidth_1(prompt_0, '530px');
  prompt_0.center_0();
}

function $refresh_2(this$static){
  var contextURL, executableTypesRequestBuilder, moduleBaseURL, moduleName, url;
  moduleBaseURL = getModuleBaseURL();
  moduleName = $moduleName;
  contextURL = $substring_0(moduleBaseURL, 0, moduleBaseURL.lastIndexOf(moduleName));
  url = contextURL + 'api/scheduler/jobs';
  executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  $setHeader(executableTypesRequestBuilder, 'accept', 'application/json');
  try {
    $sendRequest(executableTypesRequestBuilder, null, new SchedulesPanel$3_0(this$static));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $toggleSchedulerOnOff(controlSchedulerButton, isScheduler){
  var builder, url;
  url = getHostPageBaseURL() + 'api/scheduler/state';
  builder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(builder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  try {
    $sendRequest(builder, null, new SchedulesPanel$6_0(controlSchedulerButton, isScheduler));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function $updateControlSchedulerButtonState(controlSchedulerButton, isScheduler){
  var builder, url;
  url = getHostPageBaseURL() + 'api/scheduler/state';
  builder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
  $setHeader(builder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
  try {
    $sendRequest(builder, null, new SchedulesPanel$5_0(controlSchedulerButton, isScheduler));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$RequestException))
      throw $e0;
  }
}

function SchedulesPanel_0(isAdmin, isScheduler){
  SimplePanel_0.call(this);
  this.controlScheduleButton = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-run'])));
  this.editButton = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['pentaho-editbutton'])));
  this.triggerNowButton = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-execute'])));
  this.scheduleRemoveButton = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['pentaho-deletebutton'])));
  this.filterButton = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-filter-add'])));
  this.filterRemoveButton = new ToolbarButton_0(getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-filter-remove'])));
  this.filters = new ArrayList_0;
  this.table = new CellTable_0;
  this.dataProvider = new ListDataProvider_0;
  this.filterDialogCallback = new SchedulesPanel$1_0(this);
  this.scheduleDialogCallback = new SchedulesPanel$2_0(this);
  $createUI_0(this, isAdmin, isScheduler);
  $refresh_2(this);
}

defineSeed(1639, 628, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget]), SchedulesPanel_0);
_.allJobs = null;
_.filterDialog = null;
_.pager = null;
function SchedulesPanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1640, 1, {}, SchedulesPanel$1_0);
_.cancelPressed = function cancelPressed_28(){
}
;
_.okPressed = function okPressed_28(){
  this.this$0.filters.clear();
  !!$getAfterDate(this.this$0.filterDialog) && $add_13(this.this$0.filters, new SchedulesPanel$1$1_0(this));
  !!$getBeforeDate(this.this$0.filterDialog) && $add_13(this.this$0.filters, new SchedulesPanel$1$2_0(this));
  isEmpty_8($getPropertyString(this.this$0.filterDialog.resourceSuggestBox.box.element, 'value')) || $add_13(this.this$0.filters, new SchedulesPanel$1$3_0(this));
  !isEmpty_8($getUserFilter(this.this$0.filterDialog)) && !$equals_4($getUserFilter(this.this$0.filterDialog), 'ALL') && $add_13(this.this$0.filters, new SchedulesPanel$1$4_0(this));
  !isEmpty_8($getStateFilter(this.this$0.filterDialog)) && !$equals_4($getStateFilter(this.this$0.filterDialog), 'ALL') && $add_13(this.this$0.filters, new SchedulesPanel$1$5_0(this));
  !isEmpty_8($getTypeFilter(this.this$0.filterDialog)) && !$equals_4($getTypeFilter(this.this$0.filterDialog), 'ALL') && $add_13(this.this$0.filters, new SchedulesPanel$1$6_0(this));
  $setEnabled_9(this.this$0.filterRemoveButton, this.this$0.filters.size_0 > 0);
  $filterAndShowData(this.this$0);
}
;
_.this$0 = null;
function SchedulesPanel$1$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1641, 1, makeCastMap([Q$IJobFilter]), SchedulesPanel$1$1_0);
_.accept_0 = function accept_1(job){
  return $after(formatDate(job.nextRun), $getAfterDate(this.this$1.this$0.filterDialog));
}
;
_.this$1 = null;
function SchedulesPanel$1$2_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1642, 1, makeCastMap([Q$IJobFilter]), SchedulesPanel$1$2_0);
_.accept_0 = function accept_2(job){
  return $before(formatDate(job.nextRun), $getBeforeDate(this.this$1.this$0.filterDialog));
}
;
_.this$1 = null;
function SchedulesPanel$1$3_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1643, 1, makeCastMap([Q$IJobFilter]), SchedulesPanel$1$3_0);
_.accept_0 = function accept_3(job){
  return $indexOf_2($getShortResourceName(job).toLowerCase(), $getPropertyString(this.this$1.this$0.filterDialog.resourceSuggestBox.box.element, 'value').toLowerCase()) != -1;
}
;
_.this$1 = null;
function SchedulesPanel$1$4_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1644, 1, makeCastMap([Q$IJobFilter]), SchedulesPanel$1$4_0);
_.accept_0 = function accept_4(job){
  return $equalsIgnoreCase(job.userName, $getUserFilter(this.this$1.this$0.filterDialog));
}
;
_.this$1 = null;
function SchedulesPanel$1$5_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1645, 1, makeCastMap([Q$IJobFilter]), SchedulesPanel$1$5_0);
_.accept_0 = function accept_5(job){
  return $equalsIgnoreCase(job.state.toLowerCase(), $getStateFilter(this.this$1.this$0.filterDialog));
}
;
_.this$1 = null;
function SchedulesPanel$1$6_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1646, 1, makeCastMap([Q$IJobFilter]), SchedulesPanel$1$6_0);
_.accept_0 = function accept_6(job){
  return $equalsIgnoreCase($getScheduleType_0(job.jobTrigger), $getTypeFilter(this.this$1.this$0.filterDialog));
}
;
_.this$1 = null;
function $getValue_5(job){
  return $getFullResourceName(job).indexOf('.') != -1?$substring_0($getFullResourceName(job), 0, $getFullResourceName(job).lastIndexOf('.')):$getFullResourceName(job);
}

function SchedulesPanel$10_0(){
  TextColumn_0.call(this);
}

defineSeed(1647, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$10_0);
_.getValue = function getValue_6(job){
  return $getValue_5(dynamicCastJso(job));
}
;
function $getValue_6(jsJob){
  var outputPath;
  try {
    outputPath = $getOutputPath(jsJob);
    return null == outputPath || $equals_4('', $trim(outputPath))?new SafeHtmlString_0($toString_0($appendHtmlConstant(new SafeHtmlBuilder_0, '-').sb.data_0)):new SafeHtmlString_0($toString_0($appendHtmlConstant(new SafeHtmlBuilder_0, "<span class='workspace-resource-link' title='" + (new SafeHtmlString_0($toString_0($appendEscaped(new SafeHtmlBuilder_0, outputPath).sb.data_0))).html + "'>" + outputPath + '<\/span>').sb.data_0));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      return new SafeHtmlString_0($toString_0($appendHtmlConstant(new SafeHtmlBuilder_0, '-').sb.data_0));
    }
     else 
      throw $e0;
  }
}

function SchedulesPanel$11_0($anonymous0){
  this.cell = $anonymous0;
}

defineSeed(1648, 524, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$11_0);
_.getValue = function getValue_7(jsJob){
  return $getValue_6(dynamicCastJso(jsJob));
}
;
function $update_1(jsJob, value){
  $update_2(dynamicCastJso(jsJob), value);
}

function $update_2(jsJob, value){
  var errorCallback, successCallback;
  if (!value.equals$('-')) {
    errorCallback = new SchedulesPanel$12$1_0;
    successCallback = new SchedulesPanel$12$2_0(jsJob);
    validateOutputLocation($getOutputPath(jsJob), successCallback, errorCallback);
  }
}

function SchedulesPanel$12_0(){
}

defineSeed(1649, 1, {}, SchedulesPanel$12_0);
function SchedulesPanel$12$1_0(){
}

defineSeed(1650, 1, makeCastMap([Q$Command]), SchedulesPanel$12$1_0);
_.execute = function execute_52(){
  var title, message, dialogBox;
  title = getString('outputLocationErrorTitle');
  message = getString('outputLocationErrorMessage');
  dialogBox = new MessageDialogBox_2(title, message, getString('close'));
  setStyleName($getParentElement($getFirstChildElement(dialogBox.element)), 'pentaho-dialog-small', true);
  $center_0(dialogBox);
}
;
function SchedulesPanel$12$2_0(val$jsJob){
  this.val$jsJob = val$jsJob;
}

defineSeed(1651, 1, makeCastMap([Q$Command]), SchedulesPanel$12$2_0);
_.execute = function execute_53(){
  $openOutputLocation($getOutputPath(this.val$jsJob));
}
;
_.val$jsJob = null;
function $getValue_7(job){
  try {
    return $getDescription(job.jobTrigger);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      return '-';
    }
     else 
      throw $e0;
  }
}

function SchedulesPanel$13_0(){
  TextColumn_0.call(this);
}

defineSeed(1652, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$13_0);
_.getValue = function getValue_8(job){
  return $getValue_7(dynamicCastJso(job));
}
;
function $getValue_8(job){
  try {
    return job.userName;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      return '-';
    }
     else 
      throw $e0;
  }
}

function SchedulesPanel$14_0(){
  TextColumn_0.call(this);
}

defineSeed(1653, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$14_0);
_.getValue = function getValue_9(job){
  return $getValue_8(dynamicCastJso(job));
}
;
function $getValue_9(job){
  try {
    return job.state;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      return '-';
    }
     else 
      throw $e0;
  }
}

function SchedulesPanel$15_0(){
  TextColumn_0.call(this);
}

defineSeed(1654, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$15_0);
_.getValue = function getValue_10(job){
  return $getValue_9(dynamicCastJso(job));
}
;
function $getValue_10(job){
  var date, format;
  try {
    date = formatDate(job.nextRun);
    if (!date) {
      return '-';
    }
    format = getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_MEDIUM));
    return $format(format, date, null);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      return '-';
    }
     else 
      throw $e0;
  }
}

function SchedulesPanel$16_0(){
  TextColumn_0.call(this);
}

defineSeed(1655, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$16_0);
_.getValue = function getValue_11(job){
  return $getValue_10(dynamicCastJso(job));
}
;
function $getValue_11(job){
  var date, format;
  try {
    date = formatDate(job.lastRun);
    if (!date) {
      return '-';
    }
    format = getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_MEDIUM));
    return $format(format, date, null);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      return '-';
    }
     else 
      throw $e0;
  }
}

function SchedulesPanel$17_0(){
  TextColumn_0.call(this);
}

defineSeed(1656, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$17_0);
_.getValue = function getValue_12(job){
  return $getValue_11(dynamicCastJso(job));
}
;
function $compare_15(o1, o2){
  if (o1 == o2) {
    return 0;
  }
  if (o1) {
    return o2?compareTo_12(o1.jobId, o2.jobId):1;
  }
  return -1;
}

function SchedulesPanel$18_0(){
}

defineSeed(1657, 1, makeCastMap([Q$Comparator]), SchedulesPanel$18_0);
_.compare = function compare_17(o1, o2){
  return $compare_15(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function $compare_16(o1, o2){
  if (o1 == o2) {
    return 0;
  }
  if (o1) {
    return o2?compareTo_12(o1.jobName, o2.jobName):1;
  }
  return -1;
}

function SchedulesPanel$19_0(){
}

defineSeed(1658, 1, makeCastMap([Q$Comparator]), SchedulesPanel$19_0);
_.compare = function compare_18(o1, o2){
  return $compare_16(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function SchedulesPanel$2_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1659, 1, {}, SchedulesPanel$2_0);
_.cancelPressed = function cancelPressed_29(){
}
;
_.okPressed = function okPressed_29(){
  $controlJobs(this.this$0, $getSelectedJobs(this.this$0), 'removeJob', ($clinit_RequestBuilder() , DELETE), true);
  $refresh_2(this.this$0);
}
;
_.this$0 = null;
function $compare_17(o1, o2){
  var r1, r2;
  if (o1 == o2) {
    return 0;
  }
  if (o1) {
    r1 = $getShortResourceName(o1);
    r2 = null;
    !!o2 && (r2 = $getShortResourceName(o2));
    return o2?compareTo_12(r1, r2):1;
  }
  return -1;
}

function SchedulesPanel$20_0(){
}

defineSeed(1660, 1, makeCastMap([Q$Comparator]), SchedulesPanel$20_0);
_.compare = function compare_19(o1, o2){
  return $compare_17(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function $compare_18(o1, o2){
  var r1, r2;
  if (o1 == o2) {
    return 0;
  }
  if (o1) {
    r1 = $getOutputPath(o1);
    r2 = null;
    !!o2 && (r2 = $getOutputPath(o2));
    return o2?compareTo_12(r1, r2):1;
  }
  return -1;
}

function SchedulesPanel$21_0(){
}

defineSeed(1661, 1, makeCastMap([Q$Comparator]), SchedulesPanel$21_0);
_.compare = function compare_20(o1, o2){
  return $compare_18(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function $compare_19(o1, o2){
  var s1, s2;
  s1 = $getDescription(o1.jobTrigger);
  s2 = $getDescription(o2.jobTrigger);
  return compareTo_12(s1, s2);
}

function SchedulesPanel$22_0(){
}

defineSeed(1662, 1, makeCastMap([Q$Comparator]), SchedulesPanel$22_0);
_.compare = function compare_21(o1, o2){
  return $compare_19(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function $compare_20(o1, o2){
  if (o1 == o2) {
    return 0;
  }
  if (o1) {
    return o2?compareTo_12(o1.userName, o2.userName):1;
  }
  return -1;
}

function SchedulesPanel$23_0(){
}

defineSeed(1663, 1, makeCastMap([Q$Comparator]), SchedulesPanel$23_0);
_.compare = function compare_22(o1, o2){
  return $compare_20(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function $compare_21(o1, o2){
  if (o1 == o2) {
    return 0;
  }
  if (o1) {
    return o2?compareTo_12(o1.state, o2.state):1;
  }
  return -1;
}

function SchedulesPanel$24_0(){
}

defineSeed(1664, 1, makeCastMap([Q$Comparator]), SchedulesPanel$24_0);
_.compare = function compare_23(o1, o2){
  return $compare_21(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function $compare_22(o1, o2){
  if (o1 == o2) {
    return 0;
  }
  if (!o1 || !formatDate(o1.nextRun)) {
    return -1;
  }
  if (!o2 || !formatDate(o2.nextRun)) {
    return 1;
  }
  if (formatDate(o1.nextRun) == formatDate(o2.nextRun)) {
    return 0;
  }
  return $compareTo_2(formatDate(o1.nextRun), formatDate(o2.nextRun));
}

function SchedulesPanel$25_0(){
}

defineSeed(1665, 1, makeCastMap([Q$Comparator]), SchedulesPanel$25_0);
_.compare = function compare_24(o1, o2){
  return $compare_22(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function $compare_23(o1, o2){
  if (o1 == o2) {
    return 0;
  }
  if (!o1 || !formatDate(o1.lastRun)) {
    return -1;
  }
  if (!o2 || !formatDate(o2.lastRun)) {
    return 1;
  }
  if (formatDate(o1.lastRun) == formatDate(o2.lastRun)) {
    return 0;
  }
  return $compareTo_2(formatDate(o1.lastRun), formatDate(o2.lastRun));
}

function SchedulesPanel$26_0(){
}

defineSeed(1666, 1, makeCastMap([Q$Comparator]), SchedulesPanel$26_0);
_.compare = function compare_25(o1, o2){
  return $compare_23(dynamicCastJso(o1), dynamicCastJso(o2));
}
;
function SchedulesPanel$27_0(this$0, val$isScheduler){
  this.this$0 = this$0;
  this.val$isScheduler = val$isScheduler;
}

defineSeed(1667, 1, makeCastMap([Q$EventHandler, Q$SelectionChangeEvent$Handler]), SchedulesPanel$27_0);
_.onSelectionChange = function onSelectionChange_0(event_0){
  var isRunning, jobs, selectedJobs;
  selectedJobs = $getSelectedJobs(this.this$0);
  if (!!selectedJobs && selectedJobs.map.size_1() > 0) {
    jobs = dynamicCast($toArray_0(selectedJobs, initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, makeCastMap([Q$Element_$1, Q$Serializable, Q$Object_$1, Q$JsJob_$1]), -1, selectedJobs.map.size_1(), 0)), Q$JsJob_$1);
    $setEnabled_9(this.this$0.editButton, this.val$isScheduler);
    $equalsIgnoreCase('NORMAL', jobs[0].state)?$setImage(this.this$0.controlScheduleButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-stop']))):$setImage(this.this$0.controlScheduleButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-run'])));
    $setEnabled_9(this.this$0.controlScheduleButton, this.val$isScheduler);
    isRunning = $equalsIgnoreCase('NORMAL', jobs[0].state);
    $setToolTip(this.this$0.controlScheduleButton, isRunning?getString('stop'):getString('start'));
    $setEnabled_9(this.this$0.scheduleRemoveButton, this.val$isScheduler);
    $setEnabled_9(this.this$0.triggerNowButton, this.val$isScheduler);
  }
   else {
    $setEnabled_9(this.this$0.editButton, false);
    $setEnabled_9(this.this$0.controlScheduleButton, false);
    $setEnabled_9(this.this$0.scheduleRemoveButton, false);
    $setEnabled_9(this.this$0.triggerNowButton, false);
  }
}
;
_.this$0 = null;
_.val$isScheduler = false;
function SchedulesPanel$28_0(){
  var layout;
  this.label = new HTML_0;
  this.fastForwardRows = 0;
  this.style_0 = ($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerStyleInitializer() , simplePagerStyle);
  $ensureInjected(this.style_0);
  this.firstPage = new SimplePager$ImageButton_0(($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerFirstPageInitializer() , simplePagerFirstPage), ($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerFirstPageDisabledInitializer() , simplePagerFirstPageDisabled), 'First page');
  $addHandler_3(this.firstPage, new SimplePager$1_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  this.nextPage = new SimplePager$ImageButton_0(($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerNextPageInitializer() , simplePagerNextPage), ($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerNextPageDisabledInitializer() , simplePagerNextPageDisabled), 'Next page');
  $addHandler_3(this.nextPage, new SimplePager$2_0(this), TYPE_1);
  this.prevPage = new SimplePager$ImageButton_0(($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerPreviousPageInitializer() , simplePagerPreviousPage), ($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerPreviousPageDisabledInitializer() , simplePagerPreviousPageDisabled), 'Previous page');
  $addHandler_3(this.prevPage, new SimplePager$3_0(this), TYPE_1);
  this.lastPage = new SimplePager$ImageButton_0(($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerLastPageInitializer() , simplePagerLastPage), ($clinit_SimplePager_Resources_default_InlineClientBundleGenerator$simplePagerLastPageDisabledInitializer() , simplePagerLastPageDisabled), 'Last page');
  $addHandler_3(this.lastPage, new SimplePager$4_0(this), TYPE_1);
  layout = new HorizontalPanel_0;
  $setVerticalAlignment_0(layout, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $initWidget(this, layout);
  layout.add_1(this.firstPage);
  layout.add_1(this.prevPage);
  layout.add_1(this.label);
  layout.add_1(this.nextPage);
  layout.add_1(this.lastPage);
  $addClassName($getParentElement(this.firstPage.element), 'GK40RFKDEI');
  $addClassName($getParentElement(this.prevPage.element), 'GK40RFKDEI');
  $addClassName($getParentElement(this.label.element), 'GK40RFKDGI');
  $addClassName($getParentElement(this.nextPage.element), 'GK40RFKDEI');
  $addClassName($getParentElement(this.lastPage.element), 'GK40RFKDEI');
  $setDisplay_0(this, null);
}

defineSeed(1668, 543, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]), SchedulesPanel$28_0);
_.setPageStart = function setPageStart_0(index){
  var pageSize, range;
  if (this.display_0) {
    range = $getVisibleRange(this.display_0.presenter);
    pageSize = range.length_0;
    index = 0 > index?0:index;
    index != range.start && $setVisibleRange(this.display_0, new Range_1(index, pageSize));
  }
}
;
function SchedulesPanel$29_0(val$controlSchedulerButton, val$isScheduler){
  this.val$controlSchedulerButton = val$controlSchedulerButton;
  this.val$isScheduler = val$isScheduler;
}

defineSeed(1669, 1, makeCastMap([Q$Command]), SchedulesPanel$29_0);
_.execute = function execute_54(){
  $toggleSchedulerOnOff(this.val$controlSchedulerButton, this.val$isScheduler);
}
;
_.val$controlSchedulerButton = null;
_.val$isScheduler = false;
function SchedulesPanel$3_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1670, 1, {}, SchedulesPanel$3_0);
_.onError = function onError_97(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_97(request, response){
  if ($getStatusCode(response) == 200) {
    this.this$0.allJobs = $parseJson_1(escapeJsonForEval(response.xmlHttpRequest.responseText));
    $filterAndShowData(this.this$0);
  }
}
;
_.this$0 = null;
function SchedulesPanel$30_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1671, 1, makeCastMap([Q$Command]), SchedulesPanel$30_0);
_.execute = function execute_55(){
  !this.this$0.filterDialog?(this.this$0.filterDialog = new FilterDialog_0(this.this$0.allJobs, this.this$0.filterDialogCallback)):$initUI_0(this.this$0.filterDialog, this.this$0.allJobs);
  $center_0(this.this$0.filterDialog);
}
;
_.this$0 = null;
function SchedulesPanel$31_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1672, 1, makeCastMap([Q$Command]), SchedulesPanel$31_0);
_.execute = function execute_56(){
  this.this$0.filterDialog = null;
  this.this$0.filters.clear();
  $filterAndShowData(this.this$0);
  $setEnabled_9(this.this$0.filterRemoveButton, false);
  $setImage(this.this$0.filterButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-filter-add'])));
}
;
_.this$0 = null;
function SchedulesPanel$32_0(){
}

defineSeed(1673, 1, makeCastMap([Q$Command]), SchedulesPanel$32_0);
_.execute = function execute_57(){
  var cmd;
  cmd = new RefreshSchedulesCommand_0;
  $execute_0(cmd);
}
;
function SchedulesPanel$33_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1674, 1, makeCastMap([Q$Command]), SchedulesPanel$33_0);
_.execute = function execute_58(){
  var messageDialog, selectedJobs;
  selectedJobs = $getSelectedJobs(this.this$0);
  if (!!selectedJobs && selectedJobs.map.size_1() > 0) {
    messageDialog = new MessageDialogBox_0(getString('executeNow'), getString('executeNowStarted'), false, true);
    $setCallback(messageDialog, new SchedulesPanel$33$1_0(this));
    $center_0(messageDialog);
    $controlJobs(this.this$0, selectedJobs, 'triggerNow', ($clinit_RequestBuilder() , POST), false);
  }
}
;
_.this$0 = null;
function SchedulesPanel$33$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1675, 1, {}, SchedulesPanel$33$1_0);
_.cancelPressed = function cancelPressed_30(){
}
;
_.okPressed = function okPressed_30(){
  var t;
  t = new SchedulesPanel$33$1$1_0(this);
  $schedule(t, 2000);
}
;
_.this$1 = null;
function SchedulesPanel$33$1$1_0(this$2){
  $clinit_Timer();
  this.this$2 = this$2;
}

defineSeed(1676, 36, makeCastMap([Q$Timer]), SchedulesPanel$33$1$1_0);
_.run = function run_23(){
  $refresh_2(this.this$2.this$1.this$0);
}
;
_.this$2 = null;
function SchedulesPanel$34_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1677, 1, makeCastMap([Q$Command]), SchedulesPanel$34_0);
_.execute = function execute_59(){
  var jobs, selectedJobs;
  selectedJobs = $getSelectedJobs(this.this$0);
  if (!!selectedJobs && selectedJobs.map.size_1() > 0) {
    jobs = dynamicCast($toArray_0(selectedJobs, initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, makeCastMap([Q$Element_$1, Q$Serializable, Q$Object_$1, Q$JsJob_$1]), -1, selectedJobs.map.size_1(), 0)), Q$JsJob_$1);
    $equals_4('NORMAL', jobs[0].state)?$controlJobs(this.this$0, selectedJobs, 'pauseJob', ($clinit_RequestBuilder() , POST), false):$controlJobs(this.this$0, selectedJobs, 'resumeJob', ($clinit_RequestBuilder() , POST), false);
  }
}
;
_.this$0 = null;
function SchedulesPanel$35_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1678, 1, makeCastMap([Q$Command]), SchedulesPanel$35_0);
_.execute = function execute_60(){
  var editJob, executableTypesRequestBuilder, jobs, selectedJobs, url;
  selectedJobs = $getSelectedJobs(this.this$0);
  if (!!selectedJobs && selectedJobs.map.size_1() > 0) {
    jobs = dynamicCast($toArray_0(selectedJobs, initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, makeCastMap([Q$Element_$1, Q$Serializable, Q$Object_$1, Q$JsJob_$1]), -1, selectedJobs.map.size_1(), 0)), Q$JsJob_$1);
    editJob = jobs[0];
    url = getHostPageBaseURL() + 'api/repo/files/' + pathToId($getFullResourceName(editJob)) + '/canAccess?cb=' + toString_21(fromDouble(currentTimeMillis0())) + '&permissions=0';
    executableTypesRequestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
    try {
      $setHeader(executableTypesRequestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
      $sendRequest(executableTypesRequestBuilder, null, new SchedulesPanel$35$1_0(this, editJob));
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, Q$RequestException))
        throw $e0;
    }
  }
}
;
_.this$0 = null;
function SchedulesPanel$35$1_0(this$1, val$editJob){
  this.this$1 = this$1;
  this.val$editJob = val$editJob;
}

defineSeed(1679, 1, {}, SchedulesPanel$35$1_0);
_.onError = function onError_98(request, exception){
  $promptForScheduleResourceError(this.this$1.this$0, this.val$editJob);
}
;
_.onResponseReceived = function onResponseReceived_98(request, response){
  $equalsIgnoreCase('true', response.xmlHttpRequest.responseText)?$editJob(this.this$1.this$0, this.val$editJob):$promptForScheduleResourceError(this.this$1.this$0, this.val$editJob);
}
;
_.this$1 = null;
_.val$editJob = null;
function SchedulesPanel$36_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1680, 1, makeCastMap([Q$Command]), SchedulesPanel$36_0);
_.execute = function execute_61(){
  var prompt_0, selectedJobs;
  selectedJobs = $getSelectedJobs(this.this$0);
  if (!!selectedJobs && selectedJobs.map.size_1() > 0) {
    prompt_0 = new PromptDialogBox_2(getString('warning'), getString('yes'), getString('no'), false, true);
    $setContent_0(prompt_0, new Label_2(getString_0('deleteConfirmSchedles', initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['' + selectedJobs.map.size_1()]))));
    $setCallback(prompt_0, new SchedulesPanel$36$1_0(this, prompt_0));
    prompt_0.center_0();
  }
}
;
_.this$0 = null;
function SchedulesPanel$36$1_0(this$1, val$prompt){
  this.this$1 = this$1;
  this.val$prompt = val$prompt;
}

defineSeed(1681, 1, {}, SchedulesPanel$36$1_0);
_.cancelPressed = function cancelPressed_31(){
  this.val$prompt.hide_0();
}
;
_.okPressed = function okPressed_31(){
  $controlJobs(this.this$1.this$0, $getSelectedJobs(this.this$1.this$0), 'removeJob', ($clinit_RequestBuilder() , DELETE), true);
  this.val$prompt.hide_0();
}
;
_.this$1 = null;
_.val$prompt = null;
function SchedulesPanel$37_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1682, 1, {}, SchedulesPanel$37_0);
_.onError = function onError_99(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_99(request, response){
  var dialogBox, emailValidRequest, jsJob;
  if ($getStatusCode(response) == 200) {
    jsJob = $parseJsonJob_0(escapeJsonForEval(response.xmlHttpRequest.responseText));
    emailValidRequest = new RequestBuilder_0(($clinit_RequestBuilder() , GET), getHostPageBaseURL() + 'api/emailconfig/isValid');
    $setHeader(emailValidRequest, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $setHeader(emailValidRequest, 'accept', 'text/plain');
    try {
      $sendRequest(emailValidRequest, null, new SchedulesPanel$37$1_0(this, jsJob));
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, Q$RequestException))
        throw $e0;
    }
  }
   else {
    dialogBox = new MessageDialogBox_0(getString('error'), getString('serverErrorColon') + ' ' + $getStatusCode(response), false, false);
    $center_0(dialogBox);
  }
}
;
_.this$0 = null;
function SchedulesPanel$37$1_0(this$1, val$jsJob){
  this.this$1 = this$1;
  this.val$jsJob = val$jsJob;
}

defineSeed(1683, 1, {}, SchedulesPanel$37$1_0);
_.onError = function onError_100(request, exception){
  var dialogBox;
  dialogBox = new MessageDialogBox_0(getString('error'), $toString(exception), false, false);
  $center_0(dialogBox);
}
;
_.onResponseReceived = function onResponseReceived_100(request, response){
  var isEmailConfValid, schedDialog;
  if ($getStatusCode(response) == 200) {
    isEmailConfValid = ($clinit_Boolean() , $equalsIgnoreCase('true', response.xmlHttpRequest.responseText));
    schedDialog = new NewScheduleDialog_1(this.val$jsJob, this.this$1.this$0.scheduleDialogCallback, isEmailConfValid);
    $center_0(schedDialog);
  }
}
;
_.this$1 = null;
_.val$jsJob = null;
function SchedulesPanel$38_0(this$0, val$job, val$prompt){
  this.this$0 = this$0;
  this.val$job = val$job;
  this.val$prompt = val$prompt;
}

defineSeed(1684, 1, {}, SchedulesPanel$38_0);
_.cancelPressed = function cancelPressed_32(){
  this.val$prompt.hide_0();
}
;
_.okPressed = function okPressed_32(){
  var jobSet;
  jobSet = new HashSet_0;
  $add_20(jobSet, this.val$job);
  $controlJobs(this.this$0, jobSet, 'removeJob', ($clinit_RequestBuilder() , DELETE), true);
  this.val$prompt.hide_0();
}
;
_.this$0 = null;
_.val$job = null;
_.val$prompt = null;
function SchedulesPanel$39_0(this$0, val$job, val$refreshData){
  this.this$0 = this$0;
  this.val$job = val$job;
  this.val$refreshData = val$refreshData;
}

defineSeed(1685, 1, {}, SchedulesPanel$39_0);
_.onError = function onError_101(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_101(request, response){
  var isRunning;
  $setState_1(this.val$job, response.xmlHttpRequest.responseText);
  $ensurePendingState(this.this$0.table.presenter).redrawRequired = true;
  isRunning = $equalsIgnoreCase('NORMAL', response.xmlHttpRequest.responseText);
  if (isRunning) {
    $setToolTip(this.this$0.controlScheduleButton, getString('stop'));
    $setImage(this.this$0.controlScheduleButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-stop'])));
  }
   else {
    $setToolTip(this.this$0.controlScheduleButton, getString('start'));
    $setImage(this.this$0.controlScheduleButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-run'])));
  }
  this.val$refreshData && $refresh_2(this.this$0);
}
;
_.this$0 = null;
_.val$job = null;
_.val$refreshData = false;
function SchedulesPanel$4_0(){
}

defineSeed(1686, 1, makeCastMap([Q$IJobFilter]), SchedulesPanel$4_0);
_.accept_0 = function accept_7(job){
  return !$equals_4($getFullResourceName(job), 'GeneratedContentCleaner');
}
;
function SchedulesPanel$40_0(val$controlSchedulerButton, val$isScheduler){
  this.val$controlSchedulerButton = val$controlSchedulerButton;
  this.val$isScheduler = val$isScheduler;
}

defineSeed(1687, 1, {}, SchedulesPanel$40_0);
_.onError = function onError_102(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_102(request, response){
  var isRunning;
  isRunning = $equalsIgnoreCase('RUNNING', response.xmlHttpRequest.responseText);
  if (isRunning) {
    $setToolTip(this.val$controlSchedulerButton, getString('stopScheduler'));
    $setImage(this.val$controlSchedulerButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-stop-scheduler'])));
  }
   else {
    $setToolTip(this.val$controlSchedulerButton, getString('startScheduler'));
    $setImage(this.val$controlSchedulerButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-start-scheduler'])));
  }
  this.val$isScheduler?$setEnabled_9(this.val$controlSchedulerButton, true):$setEnabled_9(this.val$controlSchedulerButton, false);
}
;
_.val$controlSchedulerButton = null;
_.val$isScheduler = false;
function SchedulesPanel$5_0(val$controlSchedulerButton, val$isScheduler){
  this.val$controlSchedulerButton = val$controlSchedulerButton;
  this.val$isScheduler = val$isScheduler;
}

defineSeed(1688, 1, {}, SchedulesPanel$5_0);
_.onError = function onError_103(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_103(request, response){
  var isRunning;
  isRunning = $equalsIgnoreCase('RUNNING', response.xmlHttpRequest.responseText);
  if (isRunning) {
    $setToolTip(this.val$controlSchedulerButton, getString('stopScheduler'));
    $setImage(this.val$controlSchedulerButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-stop-scheduler'])));
  }
   else {
    $setToolTip(this.val$controlSchedulerButton, getString('startScheduler'));
    $setImage(this.val$controlSchedulerButton, getThemeableImage(initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$String_$1]), Q$String, ['icon-small', 'icon-start-scheduler'])));
  }
  this.val$isScheduler?$setEnabled_9(this.val$controlSchedulerButton, true):$setEnabled_9(this.val$controlSchedulerButton, false);
}
;
_.val$controlSchedulerButton = null;
_.val$isScheduler = false;
function SchedulesPanel$6_0(val$controlSchedulerButton, val$isScheduler){
  this.val$controlSchedulerButton = val$controlSchedulerButton;
  this.val$isScheduler = val$isScheduler;
}

defineSeed(1689, 1, {}, SchedulesPanel$6_0);
_.onError = function onError_104(request, exception){
}
;
_.onResponseReceived = function onResponseReceived_104(request, response){
  var isRunning;
  isRunning = $equalsIgnoreCase('RUNNING', response.xmlHttpRequest.responseText);
  isRunning?$controlScheduler(this.val$controlSchedulerButton, 'pause', this.val$isScheduler):$controlScheduler(this.val$controlSchedulerButton, 'start', this.val$isScheduler);
}
;
_.val$controlSchedulerButton = null;
_.val$isScheduler = false;
function SchedulesPanel$7_0(){
}

defineSeed(1690, 1, {}, SchedulesPanel$7_0);
function SchedulesPanel$8_0(){
  TextColumn_0.call(this);
}

defineSeed(1691, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$8_0);
_.getValue = function getValue_13(job){
  return dynamicCastJso(job).jobId;
}
;
function SchedulesPanel$9_0(){
  TextColumn_0.call(this);
}

defineSeed(1692, 560, makeCastMap([Q$HasCell, Q$Column]), SchedulesPanel$9_0);
_.getValue = function getValue_14(job){
  return dynamicCastJso(job).jobName;
}
;
function $clinit_SchedulesPerspectivePanel(){
  $clinit_SchedulesPerspectivePanel = nullMethod;
  instance_17 = new SchedulesPerspectivePanel_0;
}

function $createUI_1(this$static){
  var sPanel, schedulesLabel, schedulesLabelStr;
  this$static.element['className'] = 'schedulerPerspective';
  this$static.wrapperPanel = new VerticalPanel_0;
  schedulesLabelStr = getString('mySchedules');
  this$static.isAdmin && (schedulesLabelStr = getString('manageSchedules'));
  schedulesLabel = new Label_2(schedulesLabelStr);
  schedulesLabel.element['className'] = 'workspaceHeading';
  $add_17(this$static.wrapperPanel, schedulesLabel);
  this$static.schedulesPanel = new SchedulesPanel_0(this$static.isAdmin, this$static.isScheduler);
  $setStyleName(this$static.schedulesPanel, 'schedulesPanel');
  $addStyleName(this$static.schedulesPanel, 'schedules-panel-wrapper');
  $add_17(this$static.wrapperPanel, this$static.schedulesPanel);
  this$static.blockoutPanel = new BlockoutPanel_0(this$static.isAdmin);
  $setStyleName(this$static.blockoutPanel, 'schedulesPanel');
  $addStyleName(this$static.blockoutPanel, 'blockout-schedules-panel-wrapper');
  $add_17(this$static.wrapperPanel, this$static.blockoutPanel);
  sPanel = new SimplePanel_0;
  $add_7(sPanel, this$static.wrapperPanel);
  setStylePrimaryName(sPanel.getStyleElement(), 'schedulerPerspective-wrapper');
  $add_7(this$static, sPanel);
}

function $refresh_3(this$static){
  $refresh_2(this$static.schedulesPanel);
  $refresh_1(this$static.blockoutPanel);
}

function SchedulesPerspectivePanel_0(){
  var e, requestBuilder, url;
  SimplePanel_0.call(this);
  try {
    url = getHostPageBaseURL() + 'api/repo/files/canAdminister';
    requestBuilder = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url);
    $setHeader(requestBuilder, 'accept', 'text/plain');
    $setHeader(requestBuilder, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $sendRequest(requestBuilder, null, new SchedulesPerspectivePanel$1_0(this));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      alert_0(e.detailMessage);
    }
     else 
      throw $e0;
  }
}

defineSeed(1693, 628, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$SimplePanel, Q$UIObject, Q$Widget]), SchedulesPerspectivePanel_0);
_.blockoutPanel = null;
_.isAdmin = false;
_.isScheduler = false;
_.schedulesPanel = null;
_.wrapperPanel = null;
var instance_17;
function SchedulesPerspectivePanel$1_0(this$0){
  this.this$0 = this$0;
}

defineSeed(1694, 1, {}, SchedulesPerspectivePanel$1_0);
_.onError = function onError_105(request, caught){
  this.this$0.isAdmin = false;
  this.this$0.isScheduler = false;
}
;
_.onResponseReceived = function onResponseReceived_105(request, response){
  var e, requestBuilder2, url2;
  this.this$0.isAdmin = $equalsIgnoreCase('true', response.xmlHttpRequest.responseText);
  try {
    url2 = getHostPageBaseURL() + 'api/scheduler/canSchedule';
    requestBuilder2 = new RequestBuilder_0(($clinit_RequestBuilder() , GET), url2);
    $setHeader(requestBuilder2, 'accept', 'text/plain');
    $setHeader(requestBuilder2, 'If-Modified-Since', '01 Jan 1970 00:00:00 GMT');
    $sendRequest(requestBuilder2, null, new SchedulesPerspectivePanel$1$1_0(this));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      e = $e0;
      alert_0(e.detailMessage);
    }
     else 
      throw $e0;
  }
}
;
_.this$0 = null;
function SchedulesPerspectivePanel$1$1_0(this$1){
  this.this$1 = this$1;
}

defineSeed(1695, 1, {}, SchedulesPerspectivePanel$1$1_0);
_.onError = function onError_106(request, caught){
  this.this$1.this$0.isScheduler = false;
  $createUI_1(this.this$1.this$0);
}
;
_.onResponseReceived = function onResponseReceived_106(request, response){
  this.this$1.this$0.isScheduler = $equalsIgnoreCase('true', response.xmlHttpRequest.responseText);
  $createUI_1(this.this$1.this$0);
}
;
_.this$1 = null;
var cellTableLoading = null, cellTableSortAscending = null, cellTableSortDescending = null, cellTableStyle = null;
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    inject(($clinit_LocaleInfo() , '.cellTableWidget{background-color:white;font-size:0.7em;border-bottom:1px solid #6f7277;}.cellTableFooter{border-top:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;}.cellTableHeader{padding:3px 15px;text-align:left;color:white;overflow:hidden;}.cellTableCell{padding:2px 15px;overflow:hidden;}.cellTableSortableHeader{cursor:pointer;cursor:hand;}.cellTableSortableHeader:hover{color:#dfdfdf;}.cellTableEvenRow{background:#fff;}.cellTableEvenRowCell{border:2px solid #fff;}.cellTableOddRow{background:#f0f0f0;}.cellTableOddRowCell{border:2px solid #f0f0f0;}.cellTableHoveredRow{background:#cbefa3;}.cellTableHoveredRowCell{border:2px solid #cbefa3;}.cellTableKeyboardSelectedRow{background:#bebebe;}.cellTableKeyboardSelectedRowCell,.cellTableSelectedRowCell{border:2px solid #bebebe;}.cellTableSelectedRow{background:#bebebe;color:white;height:auto;overflow:auto;}.cellTableLoading{margin:30px;}'));
    return true;
  }
  return false;
}

function SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$1_0(){
}

defineSeed(1697, 1, {}, SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$1_0);
_.injected = false;
function $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableLoadingInitializer(){
  $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableLoadingInitializer = nullMethod;
  cellTableLoading = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0(($clinit_LocaleInfo() , 'data:image/gif;base64,R0lGODlhKwALAPEAAP///0tKSqampktKSiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAkKAAAALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQJCgAAACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkECQoAAAAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA='))), 43, 11);
}

function $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer(){
  $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer = nullMethod;
  cellTableSortAscending = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAM0lEQVR42mNgGOng////M/9jglX4NChh0aBEyJZyJMUdxDhLEIjfQbEgsX5JA9k0MCEJALp4URYdEOy6AAAAAElFTkSuQmCC')), 12, 12);
}

function $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer(){
  $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer = nullMethod;
  cellTableSortDescending = new ImageResourcePrototype_0(($clinit_UriUtils() , new SafeUriString_0('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAM0lEQVR42mNgGBrg////aUBcTqxiQSB+B8WCxGgo/48AHYQUK/3HBEr4NMzEomEVwzADAByiURYlCo8mAAAAAElFTkSuQmCC')), 12, 12);
}

function $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableStyleInitializer(){
  $clinit_SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$cellTableStyleInitializer = nullMethod;
  cellTableStyle = new SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$1_0;
}

var Ljava_lang_Short_2_classLit = createForClass('java.lang.', 'Short', 883), _3Ljava_lang_Short_2_classLit = createForArray('[Ljava.lang.', 'Short;', 2189), Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util.', 'AbstractList$SubList', 900), Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle', 200, Ljava_lang_Enum_2_classLit, values_5), _3Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$OutlineStyle;', 2194), Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout', 220, Ljava_lang_Enum_2_classLit, values_8), _3Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$TableLayout;', 2197), Lcom_google_gwt_dom_client_Style$OutlineStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$1', 201, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$2', 202, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$3', 203, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$4', 204, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$5', 205, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$6', 206, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$7', 207, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$8', 208, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$OutlineStyle$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$OutlineStyle$9', 209, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$TableLayout$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout$1', 221, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null), Lcom_google_gwt_dom_client_Style$TableLayout$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$TableLayout$2', 222, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null), Lcom_google_gwt_user_client_ui_ValueBoxBase$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase$1', 771), Lcom_google_gwt_user_client_ui_CheckBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CheckBox$1', 619), Lorg_pentaho_mantle_client_workspace_SchedulesPerspectivePanel_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPerspectivePanel', 1693), Lorg_pentaho_mantle_client_workspace_SchedulesPerspectivePanel$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPerspectivePanel$1', 1694), Lorg_pentaho_mantle_client_workspace_SchedulesPerspectivePanel$1$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPerspectivePanel$1$1', 1695), Lcom_google_gwt_user_cellview_client_AbstractHasData_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData', 499), Lcom_google_gwt_user_cellview_client_AbstractCellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable', 498), Lcom_google_gwt_user_cellview_client_CellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellTable', 522), Lcom_google_gwt_user_cellview_client_CellTable$ResourcesAdapter_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellTable$ResourcesAdapter', 523), Lcom_google_gwt_user_cellview_client_AbstractHasData$DefaultKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$DefaultKeyboardSelectionHandler', 505), Lcom_google_gwt_user_cellview_client_AbstractCellTable$CellTableKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$CellTableKeyboardSelectionHandler', 504), Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$Impl', 506), Lcom_google_gwt_user_cellview_client_AbstractCellTable$ImplTrident_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$ImplTrident', 507), Lcom_google_gwt_user_cellview_client_AbstractCellTable$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$1', 501), Lcom_google_gwt_user_cellview_client_AbstractCellTable$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$2', 502), Lcom_google_gwt_user_cellview_client_AbstractCellTable$3_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable$3', 503), Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View', 511), Lcom_google_gwt_user_cellview_client_AbstractHasData$View$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View$1', 512), Lcom_google_gwt_user_cellview_client_AbstractHasData$View$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$View$2', 513), Lcom_google_gwt_user_cellview_client_AbstractHasData$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHasData$1', 510), Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client.', 'HasKeyboardPagingPolicy$KeyboardPagingPolicy', 538, Ljava_lang_Enum_2_classLit, values_18), _3Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForArray('[Lcom.google.gwt.user.cellview.client.', 'HasKeyboardPagingPolicy$KeyboardPagingPolicy;', 2212), Lcom_google_gwt_view_client_CellPreviewEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'CellPreviewEvent', 815), Lcom_google_gwt_user_cellview_client_HasDataPresenter_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter', 533), Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$DefaultState', 536), Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$PendingState', 537), Lcom_google_gwt_user_cellview_client_HasDataPresenter$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$1', 534), Lcom_google_gwt_user_cellview_client_HasDataPresenter$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'HasDataPresenter$2', 535), Lcom_google_gwt_view_client_SelectionChangeEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionChangeEvent', 828), Lcom_google_gwt_user_cellview_client_ColumnSortList_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'ColumnSortList', 529), Lcom_google_gwt_user_cellview_client_ColumnSortList$ColumnSortInfo_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'ColumnSortList$ColumnSortInfo', 530), Lorg_pentaho_mantle_client_workspace_SchedulesPanel_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel', 1639), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$1', 1640), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$1$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$1$1', 1641), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$1$2_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$1$2', 1642), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$1$3_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$1$3', 1643), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$1$4_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$1$4', 1644), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$1$5_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$1$5', 1645), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$1$6_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$1$6', 1646), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$2_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$2', 1659), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$3_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$3', 1670), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$4_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$4', 1686), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$5_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$5', 1688), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$6_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$6', 1689), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$7_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$7', 1690), Lcom_google_gwt_user_cellview_client_Column_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Column', 524), Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'TextColumn', 560), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$8_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$8', 1691), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$9_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$9', 1692), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$10_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$10', 1647), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$11_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$11', 1648), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$12_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$12', 1649), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$12$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$12$1', 1650), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$12$2_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$12$2', 1651), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$13_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$13', 1652), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$14_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$14', 1653), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$15_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$15', 1654), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$16_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$16', 1655), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$17_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$17', 1656), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$18_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$18', 1657), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$19_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$19', 1658), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$20_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$20', 1660), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$21_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$21', 1661), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$22_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$22', 1662), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$23_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$23', 1663), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$24_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$24', 1664), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$25_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$25', 1665), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$26_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$26', 1666), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$27_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$27', 1667), Lcom_google_gwt_user_cellview_client_AbstractPager_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractPager', 516), Lcom_google_gwt_user_cellview_client_SimplePager_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'SimplePager', 543), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$28_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$28', 1668), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$29_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$29', 1669), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$30_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$30', 1671), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$31_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$31', 1672), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$32_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$32', 1673), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$33_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$33', 1674), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$33$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$33$1', 1675), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$33$1$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$33$1$1', 1676), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$34_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$34', 1677), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$35_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$35', 1678), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$35$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$35$1', 1679), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$36_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$36', 1680), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$36$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$36$1', 1681), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$37_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$37', 1682), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$37$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$37$1', 1683), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$38_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$38', 1684), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$39_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$39', 1685), Lorg_pentaho_mantle_client_workspace_SchedulesPanel$40_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPanel$40', 1687), Lcom_google_gwt_user_cellview_client_Column$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Column$1', 525), Lcom_google_gwt_user_cellview_client_SimplePager$ImageButton_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'SimplePager$ImageButton', 548), Lcom_google_gwt_user_cellview_client_SimplePager$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'SimplePager$1', 544), Lcom_google_gwt_user_cellview_client_SimplePager$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'SimplePager$2', 545), Lcom_google_gwt_user_cellview_client_SimplePager$3_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'SimplePager$3', 546), Lcom_google_gwt_user_cellview_client_SimplePager$4_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'SimplePager$4', 547), Lcom_google_gwt_user_cellview_client_AbstractPager$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractPager$1', 517), Lcom_google_gwt_user_cellview_client_AbstractPager$2_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractPager$2', 518), Lcom_google_gwt_view_client_RangeChangeEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'RangeChangeEvent', 826), Lcom_google_gwt_view_client_RowCountChangeEvent_2_classLit = createForClass('com.google.gwt.view.client.', 'RowCountChangeEvent', 827), Lcom_google_gwt_event_dom_client_HandlesAllKeyEvents_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'HandlesAllKeyEvents', 278), Lcom_google_gwt_view_client_AbstractDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider', 813), Lcom_google_gwt_view_client_ListDataProvider_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider', 818), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper', 819), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$WrappedListIterator_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$WrappedListIterator', 821), Lcom_google_gwt_view_client_ListDataProvider$ListWrapper$1_2_classLit = createForClass('com.google.gwt.view.client.', 'ListDataProvider$ListWrapper$1', 820), Lcom_google_gwt_view_client_AbstractDataProvider$1_2_classLit = createForClass('com.google.gwt.view.client.', 'AbstractDataProvider$1', 814), Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionModel$AbstractSelectionModel', 823), Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel$1_2_classLit = createForClass('com.google.gwt.view.client.', 'SelectionModel$AbstractSelectionModel$1', 829), Lorg_pentaho_mantle_client_workspace_SchedulesPerspectivePanel_1CellTableResources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'SchedulesPerspectivePanel_CellTableResources_default_InlineClientBundleGenerator$1', 1697), Lcom_google_gwt_view_client_MultiSelectionModel_2_classLit = createForClass('com.google.gwt.view.client.', 'MultiSelectionModel', 822), Lcom_google_gwt_view_client_MultiSelectionModel$SelectionChange_2_classLit = createForClass('com.google.gwt.view.client.', 'MultiSelectionModel$SelectionChange', 824), Lcom_google_gwt_user_cellview_client_ColumnSortEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'ColumnSortEvent', 526), Lcom_google_gwt_user_cellview_client_ColumnSortEvent$ListHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'ColumnSortEvent$ListHandler', 527), Lcom_google_gwt_user_cellview_client_ColumnSortEvent$ListHandler$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'ColumnSortEvent$ListHandler$1', 528), Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHeaderOrFooterBuilder', 514), Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder$TwoWayHashMap_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractHeaderOrFooterBuilder$TwoWayHashMap', 515), Lcom_google_gwt_cell_client_AbstractCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractCell', 111), Lorg_pentaho_mantle_client_workspace_ClickableSafeHtmlCell_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'ClickableSafeHtmlCell', 1632), Lcom_google_gwt_cell_client_Cell$Context_2_classLit = createForClass('com.google.gwt.cell.client.', 'Cell$Context', 113), Lcom_google_gwt_user_cellview_client_SimplePager_1Resources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'SimplePager_Resources_default_InlineClientBundleGenerator$1', 550), Lcom_google_gwt_view_client_Range_2_classLit = createForClass('com.google.gwt.view.client.', 'Range', 825), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImpl', 519), Lorg_pentaho_mantle_client_workspace_FilterDialog_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'FilterDialog', 1633), Lorg_pentaho_mantle_client_workspace_FilterDialog$1_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'FilterDialog$1', 1634), Lorg_pentaho_mantle_client_workspace_FilterDialog$2_2_classLit = createForClass('org.pentaho.mantle.client.workspace.', 'FilterDialog$2', 1635), Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'AbstractSafeHtmlCell', 112), Lcom_google_gwt_cell_client_TextCell_2_classLit = createForClass('com.google.gwt.cell.client.', 'TextCell', 114), Lcom_google_gwt_user_cellview_client_Header_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'Header', 539), Lcom_google_gwt_user_cellview_client_TextHeader_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'TextHeader', 561), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImplStandard', 520), Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandardBase_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'CellBasedWidgetImplStandardBase', 521), Lorg_pentaho_gwt_widgets_client_controls_DateTimePicker_2_classLit = createForClass('org.pentaho.gwt.widgets.client.controls.', 'DateTimePicker', 970), Lorg_pentaho_gwt_widgets_client_controls_DateTimePicker$1_2_classLit = createForClass('org.pentaho.gwt.widgets.client.controls.', 'DateTimePicker$1', 971), Lcom_google_gwt_user_client_ui_SuggestBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox', 743), Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$SuggestionDisplay', 748), Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$DefaultSuggestionDisplay', 747), Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenu_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$SuggestionMenu', 750), Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$SuggestionMenuItem', 751), Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$DefaultSuggestionDisplay$1', 749), Lcom_google_gwt_user_client_ui_SuggestBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$1', 744), Lcom_google_gwt_user_client_ui_SuggestBox$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$2', 746), Lcom_google_gwt_user_client_ui_SuggestBox$1TextBoxEvents_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestBox$1TextBoxEvents', 745), Lcom_google_gwt_user_client_ui_SuggestOracle_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestOracle', 710), Lcom_google_gwt_user_client_ui_SuggestOracle$Request_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestOracle$Request', 752), Lcom_google_gwt_user_client_ui_SuggestOracle$Response_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SuggestOracle$Response', 753), Lcom_google_gwt_text_shared_SimpleSafeHtmlRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'SimpleSafeHtmlRenderer', 481), Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MultiWordSuggestOracle', 709), Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$MultiWordSuggestion_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MultiWordSuggestOracle$MultiWordSuggestion', 711), Lcom_google_gwt_user_client_ui_MultiWordSuggestOracle$WordBounds_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MultiWordSuggestOracle$WordBounds', 712), Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'LoadingStateChangeEvent', 540), Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'LoadingStateChangeEvent$DefaultLoadingState', 541), Lcom_google_gwt_user_cellview_client_RowHoverEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'RowHoverEvent', 542), Lcom_google_gwt_user_client_ui_PrefixTree_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PrefixTree', 726), Lcom_google_gwt_user_client_ui_PrefixTree$PrefixTreeIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PrefixTree$PrefixTreeIterator', 727), Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTable_TemplateImpl', 509), Lcom_google_gwt_user_cellview_client_AbstractCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'AbstractCellTableBuilder', 508), Lcom_google_gwt_user_cellview_client_DefaultCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DefaultCellTableBuilder', 531), Lcom_google_gwt_user_cellview_client_DefaultHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client.', 'DefaultHeaderOrFooterBuilder', 532), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanel_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanel', 1161), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController', 1162), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$UsersListChangeListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$UsersListChangeListener', 1196), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$RolesListChangeListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$RolesListChangeListener', 1194), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$SystemRolesListChangeListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$SystemRolesListChangeListener', 1195), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$AddRoleListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$AddRoleListener', 1181), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$RemoveRoleListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$RemoveRoleListener', 1192), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$AddAllRolesListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$AddAllRolesListener', 1179), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$RemoveAllRolesListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$RemoveAllRolesListener', 1190), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$AddUserListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$AddUserListener', 1182), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$RemoveUserListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$RemoveUserListener', 1193), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$AddAllUsersListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$AddAllUsersListener', 1180), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$RemoveAllUsersListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$RemoveAllUsersListener', 1191), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$NewRoleListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$NewRoleListener', 1188), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$DeleteRoleListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$DeleteRoleListener', 1183), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$NewUserListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$NewUserListener', 1189), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$DeleteUserListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$DeleteUserListener', 1185), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$EditPasswordListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$EditPasswordListener', 1187), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$DeleteRoleListener$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$DeleteRoleListener$1', 1184), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$DeleteUserListener$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$DeleteUserListener$1', 1186), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$1', 1163), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$2_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$2', 1169), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$3_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$3', 1170), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$4_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$4', 1171), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$5_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$5', 1172), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$6_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$6', 1173), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$7_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$7', 1174), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$8_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$8', 1175), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$8$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$8$1', 1176), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$9_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$9', 1177), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$9$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$9$1', 1178), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$10_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$10', 1164), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$11_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$11', 1165), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$12_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$12', 1166), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$13_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$13', 1167), Lorg_pentaho_mantle_client_admin_UserRolesAdminPanelController$14_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserRolesAdminPanelController$14', 1168), Lorg_pentaho_mantle_client_admin_EmailAdminPanel_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanel', 1121), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController', 1122), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$1', 1123), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$2_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$2', 1131), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$3_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$3', 1132), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$4_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$4', 1133), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$5_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$5', 1134), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$6_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$6', 1135), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$7_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$7', 1136), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$8_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$8', 1137), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$9_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$9', 1138), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$10_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$10', 1124), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$11_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$11', 1125), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$12_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$12', 1126), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$13_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$13', 1127), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$14_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$14', 1128), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$15_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$15', 1129), Lorg_pentaho_mantle_client_admin_EmailAdminPanelController$16_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailAdminPanelController$16', 1130), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel', 1112), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$1', 1113), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$1$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$1$1', 1114), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$1$2_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$1$2', 1115), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$1$3_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$1$3', 1116), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$1$4_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$1$4', 1117), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$1$4$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$1$4$1', 1118), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$2_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$2', 1119), Lorg_pentaho_mantle_client_admin_ContentCleanerPanel$3_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ContentCleanerPanel$3', 1120), Lcom_google_gwt_view_client_DefaultSelectionEventManager_2_classLit = createForClass('com.google.gwt.view.client.', 'DefaultSelectionEventManager', 816), Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForEnum('com.google.gwt.view.client.', 'DefaultSelectionEventManager$SelectAction', 817, Ljava_lang_Enum_2_classLit, values_21), _3Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForArray('[Lcom.google.gwt.view.client.', 'DefaultSelectionEventManager$SelectAction;', 2261), Lorg_pentaho_gwt_widgets_client_buttons_ThemeableImageButton_2_classLit = createForClass('org.pentaho.gwt.widgets.client.buttons.', 'ThemeableImageButton', 955), Lorg_pentaho_gwt_widgets_client_buttons_ThemeableImageButton$1_2_classLit = createForClass('org.pentaho.gwt.widgets.client.buttons.', 'ThemeableImageButton$1', 956), Lorg_pentaho_gwt_widgets_client_buttons_ThemeableImageButton$2_2_classLit = createForClass('org.pentaho.gwt.widgets.client.buttons.', 'ThemeableImageButton$2', 957), Lorg_pentaho_gwt_widgets_client_buttons_ThemeableImageButton$3_2_classLit = createForClass('org.pentaho.gwt.widgets.client.buttons.', 'ThemeableImageButton$3', 958), Lorg_pentaho_gwt_widgets_client_buttons_ThemeableImageButton$4_2_classLit = createForClass('org.pentaho.gwt.widgets.client.buttons.', 'ThemeableImageButton$4', 959), Lorg_pentaho_mantle_client_admin_EmailTester_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailTester', 1141), Lorg_pentaho_mantle_client_admin_EmailTester$RequestCallbackHandler_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailTester$RequestCallbackHandler', 1142), Lorg_pentaho_mantle_client_admin_PermissionsPanel_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'PermissionsPanel', 1148), Lorg_pentaho_mantle_client_admin_PermissionsPanel$RolesValueChangeListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'PermissionsPanel$RolesValueChangeListener', 1152), Lorg_pentaho_mantle_client_admin_PermissionsPanel$LogicalRoleInfo_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'PermissionsPanel$LogicalRoleInfo', 1151), Lorg_pentaho_mantle_client_admin_PermissionsPanel$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'PermissionsPanel$1', 1149), Lorg_pentaho_mantle_client_admin_PermissionsPanel$2_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'PermissionsPanel$2', 1150), Lorg_pentaho_mantle_client_admin_EmailTestDialog_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailTestDialog', 1139), Lorg_pentaho_mantle_client_admin_EmailTestDialog$1_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'EmailTestDialog$1', 1140), Lcom_google_gwt_dom_builder_shared_AbstractElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'AbstractElementBuilderBase', 148), Lcom_google_gwt_dom_builder_shared_HtmlElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlElementBuilderBase', 156), Lcom_google_gwt_dom_builder_shared_HtmlTableSectionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableSectionBuilder', 166), Lorg_pentaho_mantle_client_admin_UserDialog_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserDialog', 1157), Lorg_pentaho_mantle_client_admin_UserDialog$AcceptListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserDialog$AcceptListener', 1158), Lorg_pentaho_mantle_client_admin_UserDialog$CancelListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserDialog$CancelListener', 1159), Lorg_pentaho_mantle_client_admin_UserDialog$TextBoxValueChangeHandler_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'UserDialog$TextBoxValueChangeHandler', 1160), Lorg_pentaho_mantle_client_admin_RoleDialog_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'RoleDialog', 1153), Lorg_pentaho_mantle_client_admin_RoleDialog$AcceptListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'RoleDialog$AcceptListener', 1154), Lorg_pentaho_mantle_client_admin_RoleDialog$CancelListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'RoleDialog$CancelListener', 1155), Lorg_pentaho_mantle_client_admin_RoleDialog$TextBoxValueChangeHandler_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'RoleDialog$TextBoxValueChangeHandler', 1156), Lorg_pentaho_mantle_client_admin_ChangePasswordDialog_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ChangePasswordDialog', 1103), Lorg_pentaho_mantle_client_admin_ChangePasswordDialog$AcceptListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ChangePasswordDialog$AcceptListener', 1109), Lorg_pentaho_mantle_client_admin_ChangePasswordDialog$CancelListener_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ChangePasswordDialog$CancelListener', 1110), Lorg_pentaho_mantle_client_admin_ChangePasswordDialog$TextBoxValueChangeHandler_2_classLit = createForClass('org.pentaho.mantle.client.admin.', 'ChangePasswordDialog$TextBoxValueChangeHandler', 1111), Lcom_google_gwt_dom_builder_shared_ElementBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderFactory', 149), Lcom_google_gwt_dom_builder_shared_HtmlBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlBuilderFactory', 153), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl', 150), Lcom_google_gwt_dom_builder_shared_HtmlBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlBuilderImpl', 154), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$StackNode_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl$StackNode', 152), Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$FastPeekStack_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'ElementBuilderImpl$FastPeekStack', 151), Lcom_google_gwt_dom_builder_shared_HtmlTableRowBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableRowBuilder', 165), Lcom_google_gwt_dom_builder_shared_HtmlDivBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlDivBuilder', 155), Lcom_google_gwt_dom_builder_shared_HtmlElementBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlElementBuilder', 157), Lcom_google_gwt_dom_builder_shared_HtmlInputBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlInputBuilder', 158), Lcom_google_gwt_dom_builder_shared_HtmlLIBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlLIBuilder', 159), Lcom_google_gwt_dom_builder_shared_HtmlOptionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlOptionBuilder', 160), Lcom_google_gwt_dom_builder_shared_HtmlSpanBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlSpanBuilder', 161), Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlStylesBuilder', 162), Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder$FastStringMapClient_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlStylesBuilder$FastStringMapClient', 163), Lcom_google_gwt_dom_builder_shared_HtmlTableCellBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared.', 'HtmlTableCellBuilder', 164);
$entry(onLoad_0)(11);
