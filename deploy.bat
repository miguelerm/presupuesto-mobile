echo Compilando
cordova build --release android
echo Firmando
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore C:\Users\mike\OneDrive\Documentos\Keys\android\release-key.keystore platforms\android\ant-build\CordovaApp-release-unsigned.apk android_key
echo Alineando
"C:\Program Files (x86)\Android\android-sdk\build-tools\21.1.1\zipalign.exe" -v 4 platforms\android\ant-build\CordovaApp-release-unsigned.apk platforms\android\ant-build\presupuesto-mobile.apk