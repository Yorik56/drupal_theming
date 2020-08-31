#!/usr/bin/env sh

dir=$(cd "${0%[/\\]*}" > /dev/null; cd "../drush/drush" && pwd)

if [ -d /proc/cygdrive ]; then
    case $(which php) in
        $(readlink -n /proc/cygdrive)/*)
            # We are in Cygwin using Windows php, so the path must be translated
            dir=$(cygpath -m "$dir");
            ;;
    esac
fi

"${dir}/drush.complete.sh" "$@"
