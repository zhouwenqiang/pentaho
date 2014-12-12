defineSeed(1570, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_17(){
  if ($equals_4(($clinit_UserRolesAdminPanelController() , 'userRolesAdminPanel'), this.this$0.adminPanelAwaitingActivation.id_0)) {
    runAsync(9, new MantleModel$2_0(this.this$0.model));
    instance_8.element.id = 'userRolesAdminPanel';
  }
   else if ($equals_4((!emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0) , 'emailAdminPanel'), this.this$0.adminPanelAwaitingActivation.id_0)) {
    runAsync(10, new MantleModel$3_0(this.this$0.model));
    $setId((!emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0) , emailAdminPanelController).element, (!emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0) , 'emailAdminPanel'));
  }
   else if ($equals_4(($clinit_ContentCleanerPanel() , 'contentCleanerPanel'), this.this$0.adminPanelAwaitingActivation.id_0)) {
    runAsync(8, new MantleModel$1_0(this.this$0.model));
    instance_7.element.id = 'contentCleanerPanel';
  }
   else {
    $loadAdminContent(this.this$0.adminPanelAwaitingActivation.id_0, this.this$0.adminPanelAwaitingActivation.url);
  }
}
;
$entry(onLoad_0)(4);
