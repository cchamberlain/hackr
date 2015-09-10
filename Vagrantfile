# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

# ->ubuntu 14 preset
_ubuntu_14 = <<SCRIPT
  export DEBIAN_FRONTEND=noninteractive
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
  echo "deb http://download.mono-project.com/repo/debian wheezy main" | tee /etc/apt/sources.list.d/mono-xamarin.list
  apt-get -y update
  apt-get -y install libmono-cil-dev mono-4.0-service mono-devel mono-complete
SCRIPT

# ->ubuntu 12 presetup
_ubuntu_12 = <<SCRIPT
  export DEBIAN_FRONTEND=noninteractive
  add-apt-repository ppa:directhex/monoxide
  apt-get -y update
  apt-get -y install libmono-cil-dev mono-4.0-service mono-devel mono-complete
SCRIPT

# ->main provisioning script
_provision = <<SCRIPT
  set -o errexit
  set -o pipefail
  set -o nounset
  shopt -s failglob
  set -o xtrace
  
  export VUSER=vagrant
  export PREFIX=/usr/local
  export PATH=$PREFIX/bin:$PATH
  
  apt-get -y update
  apt-get -uy dist-upgrade  
  
  # ->INSTALL APPS
  apt-get -y install build-essential linux-headers-$(uname -r) vim git zsh autoconf libtool automake unzip gettext
  
  . ~/.bashrc
  mkdir ~/local
  mkdir ~/node-latest-install
  cd ~/node-latest-install
  curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
  ./configure --prefix=~/local
  curl https://npmjs.org/install.sh | sh
  
  # ->LOGIN (BASH) CONTINUE SETUP
  exec sudo -i -u vagrant $(which bash) -- << EOF
  
  # ->LIBUV (FOR DNX)
  curl -sSL https://github.com/libuv/libuv/archive/v1.4.2.tar.gz | sudo tar zxfv - -C /usr/local/src
  cd /usr/local/src/libuv-1.4.2
  sudo sh autogen.sh
  sudo ./configure
  sudo make
  sudo make install
  sudo rm -rf /usr/local/src/libuv-1.4.2 && cd ~/
  sudo ldconfig
  
  # ->DNVM
  [[ -d ~/.dnx ]] || curl -sSL https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.sh | DNX_BRANCH=dev sh && source ~/.dnx/dnvm/dnvm.sh
  
  mkdir -p ~/.config/NuGet
  
  # ->NUGET
  [[ -f ~/.config/NuGet/NuGet.config ]] && curl -sL https://gist.githubusercontent.com/cchamberlain/0711a59e5c9220a0325e/raw/6192ae73c802e69817784df39e2a4e1a9fd90db5/NuGet.config  >~/.config/NuGet/NuGet.config
  
  # ->ZSHENV
  curl -sL https://gist.githubusercontent.com/cchamberlain/ad8ae7ce3ef2a965295d/raw/cc68d65e7a058d7812c8fa7d7869e5378be804fc/.zshenv >~/.zshenv
  
  # ->ZDOTDIR
  [[ -d ~/.zsh ]] || git clone -b darwin --single-branch --recursive https://github.com/cchamberlain/zdotdir ~/.zsh
  
  # ->LOGIN ZSH
  sudo chsh -s $(which zsh) $(whoami)
  exec sudo -i -u vagrant $(which zsh) -- << EOF
  
  cd /vagrant
  npm install
SCRIPT

# ->Ensure that VMWare Tools recompiles kernel modules when we update the linux images
_fix_vmware_tools_script = <<SCRIPT
  sed -i.bak 's/answer AUTO_KMODS_ENABLED_ANSWER no/answer AUTO_KMODS_ENABLED_ANSWER yes/g' /etc/vmware-tools/locations
  sed -i 's/answer AUTO_KMODS_ENABLED no/answer AUTO_KMODS_ENABLED yes/g' /etc/vmware-tools/locations
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.provider "virtualbox" do |v|
    config.vm.box = "ubuntu/trusty64"
    # v.gui = true
    v.memory = 1536
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
    
    config.vm.provision "shell", inline: _ubuntu_14
    config.vm.provision "shell", inline: _provision
    config.vm.network "forwarded_port", guest: 8080, host: 8080 
    config.vm.network "forwarded_port", guest: 2992, host: 2992
  end

  config.vm.provider "vmware_workstation" do |v|
    config.vm.box = "hashicorp/precise64"
    # v.gui = true
    v.vmx["memsize"] = "4096"
    v.vmx["numvcpus"] = "2"
    
    config.vm.provision "shell", inline: _ubuntu_12
    config.vm.provision "shell", inline: _provision
    config.vm.provision "shell", inline: _fix_vmware_tools_script
    config.vm.network "forwarded_port", guest: 8080, host: 8080 
    config.vm.network "forwarded_port", guest: 2992, host: 2992
  end
end
