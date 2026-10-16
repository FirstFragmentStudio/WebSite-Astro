# Generate-Favicons.ps1

param(
    [Parameter(Mandatory = $true)]
    [string]$SourceImage,

    [string]$OutputFolder = ".\favicons"
)

if (-not (Test-Path $SourceImage)) {
    Write-Error "Source image not found: $SourceImage"
    exit 1
}

New-Item -ItemType Directory -Force -Path $OutputFolder | Out-Null

Write-Host "Generating favicons..."

# Standard PNG sizes
$sizes = @{
    "favicon-16x16.png"          = 16
    "favicon-32x32.png"          = 32
    "favicon-48x48.png"          = 48
    "apple-touch-icon.png"       = 180
    "android-chrome-192x192.png" = 192
    "android-chrome-512x512.png" = 512
}

foreach ($file in $sizes.Keys) {
    $size = $sizes[$file]

    & "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe" $SourceImage -background none -resize "$($size)x$($size)" "$OutputFolder\$file"
}

# Multi-size ICO
& "C:\Program Files\ImageMagick-7.1.2-Q16-HDRI\magick.exe" $SourceImage -background none -define icon:auto-resize=16,32,48,64,128,256 "$OutputFolder\favicon.ico"

# SVG copy placeholder
# If your source is already SVG this copies it.
if ([IO.Path]::GetExtension($SourceImage).ToLower() -eq ".svg") {
    Copy-Item $SourceImage "$OutputFolder\favicon.svg" -Force
}

# Web Manifest
@"
{
  "name": "First Fragment Studio",
  "short_name": "First Fragment",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
"@ | Set-Content "$OutputFolder\site.webmanifest"

Write-Host ""
Write-Host "Done!"
Write-Host "Files created in $OutputFolder"