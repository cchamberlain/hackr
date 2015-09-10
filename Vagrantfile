# -*- mode: ruby -*-
# vi: set ft=ruby :

_script = <<SCRIPT

set -o errexit
set -o pipefail
set -o nounset
shopt -s failglob
set -o xtrace

export VUSER=vagrant
export DEBIAN_FRONTEND=noninteractive
export PREFIX=/usr/local
export PATH=$PREFIX/bin:$PATH

#->UPDATE SOURCES FOR DNVM
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/debian wheezy main" | tee /etc/apt/sources.list.d/mono-xamarin.list
apt-get update

#->IOJS
curl -sL https://deb.nodesource.com/setup_iojs_1.x | sudo bash -

#->INSTALL APPS
apt-get install -y iojs vim git zsh build-essential autoconf libtool automake mono-devel unzip gettext

#->LOGIN (BASH) CONTINUE SETUP
exec sudo -i -u vagrant $(which bash) -- << EOF

if ! hash mono 2>/dev/null; then
  #-> BUILD Mono from source
  git clone https://github.com/mono/mono.git
  cd mono
  ./autogen.sh --prefix=$PREFIX
  make
  sudo make install
  cd .. && rm -rf Mono
  mozroots --import --sync

  #->LIBUV (FOR DNX)
  curl -sSL https://github.com/libuv/libuv/archive/v1.4.2.tar.gz | sudo tar zxfv - -C /usr/local/src
  cd /usr/local/src/libuv-1.4.2
  sudo sh autogen.sh
  sudo ./configure
  sudo make
  sudo make install
  sudo rm -rf /usr/local/src/libuv-1.4.2 && cd ~/
  sudo ldconfig
fi

#->DNVM
[[ -d ~/.dnx ]] || curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.sh | DNX_BRANCH=dev sh && source ~/.dnx/dnvm/dnvm.sh

mkdir -p ~/.config/NuGet

#->NUGET
[[ -f ~/.config/NuGet/NuGet.config ]] && curl -sL https://gist.githubusercontent.com/cchamberlain/0711a59e5c9220a0325e/raw/6192ae73c802e69817784df39e2a4e1a9fd90db5/NuGet.config  >~/.config/NuGet/NuGet.config

#->ZSHENV
curl -sL https://gist.githubusercontent.com/cchamberlain/ad8ae7ce3ef2a965295d/raw/cc68d65e7a058d7812c8fa7d7869e5378be804fc/.zshenv >~/.zshenv

#->ZDOTDIR
[[ -d ~/.zsh ]] || git clone -b darwin --single-branch --recursive https://github.com/cchamberlain/zdotdir ~/.zsh

#->LOGIN ZSH
sudo chsh -s $(which zsh) $(whoami)
exec sudo -i -u vagrant $(which zsh) -- << EOF

cd /vagrant
npm install

EOF
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.provider "virtualbox" do |v|
    # v.gui = true
    v.memory = 1536
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end

  config.vm.provision "shell", inline: _script
  config.vm.network "forwarded_port", guest: 8080, host: 8080 
  config.vm.network "forwarded_port", guest: 2992, host: 2992
end
