defineSeed(1584, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_21(){
  !emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0);
  this.this$0.sysAdminPanelsMap.containsKey('emailAdminPanel') || this.this$0.sysAdminPanelsMap.put('emailAdminPanel', (!emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0) , emailAdminPanelController));
  $passivateActiveSecurityPanels(this.this$0, 'emailAdminPanel', null);
}
;
$entry(onLoad_0)(7);
