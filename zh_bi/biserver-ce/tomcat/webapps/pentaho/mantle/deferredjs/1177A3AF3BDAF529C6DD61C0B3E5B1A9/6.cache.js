defineSeed(1575, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_20(){
  if (this.this$0.overrideContentPanelId != null && this.this$0.overrideContentUrl != null) {
    $passivateActiveSecurityPanels(this.this$0, this.this$0.overrideContentPanelId, this.this$0.overrideContentUrl);
    this.this$0.overrideContentPanelId = null;
    this.this$0.overrideContentUrl = null;
  }
   else {
    $clinit_UserRolesAdminPanelController();
    this.this$0.sysAdminPanelsMap.containsKey('userRolesAdminPanel') || this.this$0.sysAdminPanelsMap.put('userRolesAdminPanel', instance_8);
    $passivateActiveSecurityPanels(this.this$0, 'userRolesAdminPanel', null);
  }
}
;
$entry(onLoad_0)(6);
