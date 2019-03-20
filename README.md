Webhook step

```
steps:
 SendWebhook:
    title: Webhook
    image: andriicodefresh/webhook-plugin
    environment:
    - WEBHOOK_URL=${{WEBHOOK_URL}}
    - WEBHOOK_METHOD=${{WEBHOOK_METHOD}}
    - WEBHOOK_USERNAME=${{WEBHOOK_USERNAME}}
    - WEBHOOK_PASSWORD=${{WEBHOOK_PASSWORD}}
    - WEBHOOK_TOKEN=${{WEBHOOK_TOKEN}}
    - WEBHOOK_HEADERS:
      - "Content-Type:application/json"
    - WEBHOOK_QUERY:
      - "repo=${{REPO_NAME}}"
    - WEBHOOK_BODY: |
      {
        "owner": "{{ repo.owner }}",
        "name": "{{ repo.name }}",
      }
```

Abilities: 
1. You can send simple message , just put SLACK_TEXT as env variable
2. You can send template message, just put ATTACHMENTS as env variable
Example 
```
[{
    "fallback": "Deployed to Staging environment",
    "color": "good",
    "pretext": "Added XYZ to feature-104",
    "author_name": "Auto Deploy Robot",
    "author_link": "https://cloudposse.com/wp-content/uploads/sites/29/2018/02/small-cute-robot-square.png",
    "author_icon": "https://cloudposse.com/wp-content/uploads/sites/29/2018/02/small-cute-robot-square.png",
    "title": "test",
    "title_link": "test",
    "thumb_url": "https://cloudposse.com/wp-content/uploads/sites/29/2018/02/SquareLogo2.png",
    "footer": "test",
    "fields": [{"title": "Project", "value": "Awesome Project", "short": true}, {
        "title": "Environment",
        "value": "production",
        "short": true
    }]
}]
```
 
List of env variables

```

SLACK_HOOK_URL - required
SLACK_ATTACHMENTS    - optional
SLACK_TEXT     - optional
SLACK_USER_NAME - optional
SLACK_ICON_EMOJI - optional

```
