# Script para conectar o repositório local ao GitHub
# Uso: .\setup-github.ps1 -GitHubUsername "seu-usuario" -RepoName "nome-do-repositorio"

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$true)]
    [string]$RepoName
)

Write-Host "🔗 Conectando repositório local ao GitHub..." -ForegroundColor Cyan

# Adicionar remote origin
$remoteUrl = "https://github.com/$GitHubUsername/$RepoName.git"
Write-Host "📡 Adicionando remote: $remoteUrl" -ForegroundColor Yellow
git remote add origin $remoteUrl

# Verificar se foi adicionado corretamente
Write-Host "`n✅ Remote adicionado com sucesso!" -ForegroundColor Green
Write-Host "`n📋 Remotes configurados:" -ForegroundColor Cyan
git remote -v

Write-Host "`n🚀 Próximos passos:" -ForegroundColor Yellow
Write-Host "1. Certifique-se de que o repositório '$RepoName' foi criado no GitHub" -ForegroundColor White
Write-Host "2. Execute: git push -u origin master" -ForegroundColor White
Write-Host "   (ou 'git push -u origin main' se sua branch principal for 'main')" -ForegroundColor White

