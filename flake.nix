{
  description = "Develop using Nix in VSCode";

  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixpkgs-unstable;
    flake-utils.url = github:numtide/flake-utils;
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.simpleFlake {
      inherit self nixpkgs;
      name = "vscode-nix-develop";
      shell = ./shell.nix;
      systems = [ "x86_64-darwin" ];
    };
}
