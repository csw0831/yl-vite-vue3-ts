$nvmrcPath = Join-Path (Get-Location) ".nvmrc"
if (Test-Path $nvmrcPath) {
    $nodeVersion = Get-Content $nvmrcPath
    $CurrentNodeVersios = node -v
    if ($CurrentNodeVersios -ne "v$nodeVersion") {  
        nvm use $nodeVersion  
    }  
    else {  
        Write-Host "Node version is already 18.17.0"  
    }  
}
