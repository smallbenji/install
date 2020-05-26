sudo apt-get update
sudo apt update
sudo apt-get install git
sudo apt-get install nano
sudo apt-get install dpkg
yes | sudo apt install libnotify4
yes | sudo apt install libxkbfile1
yes | sudo apt install libsecret-1-0
sudo wget https://az764295.vo.msecnd.net/stable/5763d909d5f12fe19f215cbfdd29a91c0fa9208a/code_1.45.1-1589445302_amd64.deb
yes | sudo dpkg -i code_1.45.1-1589445302_amd64.deb
yes | sudo apt --fix-broken install
sudo rm code_1.45.1-1589445302_amd64.deb
sudo apt-get update
sudo apt update
yes | sudo apt upgrade
git config --global credential.helper store
git config --global user.email "benj8114@fmkskole.dk"
git config --global user.name "smallbenji"
cp ./flags.txt -r ./../
cd ..
sudo rm -r ./install
echo DONE
