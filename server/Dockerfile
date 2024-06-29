FROM node:20-slim AS base

SHELL ["/bin/bash", "-c"] 

RUN apt-get update \
    && apt-get install -y curl python3 g++ make git \
    && apt-get -y autoclean

# nvim
RUN curl -LO https://github.com/neovim/neovim/releases/download/v0.9.5/nvim-linux64.tar.gz
RUN rm -rf /opt/nvim
RUN tar -C /opt -xzf nvim-linux64.tar.gz
ENV PATH "$PATH:/opt/nvim-linux64/bin"
RUN . ~/.bashrc

## plugin
# RUN LV_BRANCH='release-1.4/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.4/neovim-0.9/utils/installer/install.sh)
# RUN mv ~/.local/share/nvim ~/.local/share/nvim.bak
# RUN mv ~/.local/state/nvim ~/.local/state/nvim.bak
# RUN mv ~/.cache/nvim ~/.cache/nvim.bak
RUN git clone -b enhanced --single-branch https://github.com/Debajyati/Efficienvim ~/.config/nvim
RUN rm -rf ~/.config/nvim/.git

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Install pnpm.
ENV PNPM_VERSION=9.4.0
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}
RUN . ~/.bashrc

# ai
RUN npm install -g get-response-lite
RUN echo "alias :ai='npx get-response-lite'" >> ~/.bashrc
RUN . ~/.bashrc


FROM base AS build
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install

COPY . .

RUN pnpm run build
EXPOSE 3000

ENTRYPOINT [ "pnpm" ]
CMD [ "start" ]
