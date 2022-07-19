# execute this powershell script

function gitPush($message){
  
 git add . 
 git commit -m $message 
 git push origin  (git branch --show-current )
 echo "----------Code is pushed successfully----------"
 echo ""

}

  gitPush -message $args[0]
  