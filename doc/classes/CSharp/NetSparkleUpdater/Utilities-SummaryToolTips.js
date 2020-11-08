NDSummary.OnToolTipsLoaded("CSharpClass:NetSparkleUpdater.Utilities",{324:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype324\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">NetSparkleUpdater.</span>&#8203;Utilities</div></div></div><div class=\"TTSummary\">Provides commonly used utility functions to users of NetSparkleUpdater</div></div>",326:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static string</span> GetVersionString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Version&nbsp;</td><td class=\"PName last\">version</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes trailing 0 components from the given version.  &quot;1.2.3.0&quot; -&gt; &quot;1.2.3&quot;; &quot;1.2.0.0&quot; -&gt; &quot;1.2&quot;; &quot;1.0.0.0&quot; -&gt; &quot;1.0&quot;</div></div>",327:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype327\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static string</span> GetDSASignature(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">fileToSignPath,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">privateKeyFilePath</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the signature of a file with the given DSA private key.</div></div>",1061:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1061\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static</span> Uri GetAbsoluteURL(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">url,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">appcastURL</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Uri from a URL string. If the URL is relative, converts it to an absolute URL based on the appcast URL.</div></div>",329:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype329\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static string</span> ConvertNumBytesToUserReadableString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName last\">numBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Convert a number of bytes to a user-readable string</div></div>",330:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype330\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public static string</span> GetFullBaseDirectory()</div><div class=\"TTSummary\">Get the full base (running) directory for this application including a trailing slash.&nbsp; From WalletWasabi: https://github.com/zkSNACKs/WalletWasabi/blob/8d42bce976605cca3326ea6c998b2294494900e6/WalletWasabi/Helpers/EnvironmentHelpers.cs</div></div>",331:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype331\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static byte</span>[] ConvertStreamToByteArray(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Stream&nbsp;</td><td class=\"PName last\">stream</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Convert a given Stream to a byte array</div></div>",332:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype332\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> IsSignatureNeeded(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SecurityMode&nbsp;</td><td class=\"PName\">securityMode,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">doesKeyInfoExist,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">isCheckingSoftwareDownload&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks to see whether a signature is ncessary given the provided info on the SecurityMode and whether or not valid key information exists at the moment.</div></div>",1062:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1062\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static string</span> NumBytesToUserReadableString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName last\">numBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Convert a number of bytes to a user-readable string</div></div>",1065:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype1065\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public static bool</span> IsSignatureNeeded(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SecurityMode&nbsp;</td><td class=\"PName last\">securityMode,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">doesKeyInfoExist</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>"});