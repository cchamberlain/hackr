# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "williamyeh/ubuntu-trusty64-docker"


  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
config.vm.provision "shell", inline: <<-SHELL
    sed -i.bak 's/answer AUTO_KMODS_ENABLED_ANSWER no/answer AUTO_KMODS_ENABLED_ANSWER yes/g' /etc/vmware-tools/locations
    sed -i 's/answer AUTO_KMODS_ENABLED no/answer AUTO_KMODS_ENABLED yes/g' /etc/vmware-tools/locations
    
    apt-get -y update
    apt-get -y autoremove
    apt-get -y install build-essential vim git curl zsh autoconf libtool automake unzip gettext gcc g++ clang-3.5 clang++-3.5 libssl-dev

    ln -s /usr/src/linux-headers-$(uname -r)/include/generated/uapi/linux/version.h /usr/src/linux-headers-$(uname -r)/include/linux/version.h
    
    # FIX FOR UBUNTU 14.04
    echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
EOF
SHELL

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"
  
  config.vm.network "forwarded_port", guest: 8080, host: 8080 
  config.vm.network "forwarded_port", guest: 2992, host: 2992

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  config.vm.provider "vmware_workstation" do |vm|
     vm.gui = true
    vm.vmx["memsize"] = "4096"
    vm.vmx["numvcpus"] = "2"
  end

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  config.push.define "atlas" do |push|
    push.app = "cchamberlain/hackr"
  end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
config.vm.provision "shell", inline: <<-SHELLUSER
    exec sudo -i -u vagrant $(which bash) -- <<-EOF
    
    mkdir -p ~/src
    mkdir -p ~/local
    
    export NPM_CONFIG_PREFIX=~/local/npm
    export NPM_CONFIG_CACHE=~/local/npm-cache
    
    pushd ~/src
      hash node 2>/dev/null || {
        git clone https://github.com/nodejs/node
        pushd node
          ./configure
          make -j2
          sudo make install
        popd
      }
      

      hash npm 2>/dev/null || {
        git clone https://github.com/npm/npm
        pushd npm
          ./configure
          make -j2
          sudo make install
        popd
      }
    popd
    
    cd /vagrant
    sudo npm install -g --no-optional webpack webpack-dev-server
    npm install --no-optional --no-bin-links
EOF
SHELLUSER
end