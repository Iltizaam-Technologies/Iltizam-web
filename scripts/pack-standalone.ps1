# Windows PowerShell — same as: npm run pack:deploy
# Run AFTER: npm run build

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$deploy = Join-Path $root "deploy"

Set-Location $root
node (Join-Path $PSScriptRoot "pack-standalone.mjs")

if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host ""
Write-Host "Deploy folder: $deploy" -ForegroundColor Green
