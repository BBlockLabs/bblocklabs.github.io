---
sidebar_position: 6
---

# Making a service
This guide explains how to make a service for bonus-blockd so it will launch on system start

## Creating the systemd file

All services must run under non-privileged users by default. We assume you will run the node under the same user
as you are following this tutorial. If you created dedicated user, please replace the `$USER` with the appropriate ID.

Create the new systemd service file by running:
```bash
tee /etc/systemd/system/bonusblock.service > /dev/null <<EOF
[Unit]
Description=BonusBlock Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which bonus-blockd) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
```

## Register and start the service
```bash
systemctl daemon-reload
systemctl enable bonusblock
systemctl restart bonusblock
```

## View the live log of the service
```bash
journalctl -u bonusblock -f -o cat
```
