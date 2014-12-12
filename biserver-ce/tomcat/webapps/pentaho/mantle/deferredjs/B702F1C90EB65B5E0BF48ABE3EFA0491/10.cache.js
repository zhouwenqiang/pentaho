defineSeed(1598, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_25(){
  var contentDeck;
  contentDeck = (!instance_14 && (instance_14 = new MantleXul_0) , instance_14).adminContentDeck;
  $getWidgetIndex(($clinit_MantleApplication() , !instance_6 && (instance_6 = new MantleApplication_0) , $clinit_MantleApplication() , instance_6).contentDeck, (!emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0) , emailAdminPanelController)) == -1 && contentDeck.add_1((!emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0) , emailAdminPanelController));
  contentDeck.showWidget($getWidgetIndex(contentDeck, (!emailAdminPanelController && (emailAdminPanelController = new EmailAdminPanelController_0) , emailAdminPanelController)));
}
;
$entry(onLoad_0)(10);
