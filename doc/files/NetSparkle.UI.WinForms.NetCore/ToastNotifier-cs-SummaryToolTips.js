NDSummary.OnToolTipsLoaded("File:NetSparkle.UI.WinForms.NetCore/ToastNotifier.cs",{1462:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1462\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">NetSparkleUpdater.&#8203;UI.&#8203;WinForms.</span>&#8203;ToastNotifier</div></div></div><div class=\"TTSummary\">Like a notification ballon, but more reliable &quot;toast&quot; because it slowly goes up, then down.&nbsp; Subscribe to the Click even to know if the user clicked on it.</div></div>",1464:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1464\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> Timer _goUpTimer</div></div>",1465:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1465\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> Timer _goDownTimer</div></div>",1466:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1466\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> Timer _pauseTimer</div></div>",1467:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1467\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> startPosX</div></div>",1468:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype1468\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> startPosY</div></div>",1470:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1470\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public</span> ToastNotifier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Icon&nbsp;</td><td class=\"PName\">applicationIcon&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">null</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">constructor</div></div>",1472:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1472\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Action&lt;List&lt;AppCastItem&gt;&gt; ClickAction { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">Action to perform when the user clicks on the toast window</div></div>",1473:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype1473\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> List&lt;AppCastItem&gt; Updates { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">set</span> }</div><div class=\"TTSummary\">List of&nbsp; updates that the user is being notified about in the toast message</div></div>",1475:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1475\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> PauseTimerTick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">sender,</td></tr><tr><td class=\"PType first\">EventArgs&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1476:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1476\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">protected override void</span> OnLoad(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">EventArgs&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1477:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1477\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GoUpTimerTick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">sender,</td></tr><tr><td class=\"PType first\">EventArgs&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1478:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1478\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> GoDownTimerTick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">sender,</td></tr><tr><td class=\"PType first\">EventArgs&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1479:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1479\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> ToastNotifier_Click(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">sender,</td></tr><tr><td class=\"PType first\">EventArgs&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",1480:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1480\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public void</span> Show(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">message,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">callToAction,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Show the toast</div></div>",1481:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1481\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> callToAction_LinkClicked(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">sender,</td></tr><tr><td class=\"PType first\">LinkLabelLinkClickedEventArgs&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>"});