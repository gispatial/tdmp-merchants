<!-- =========================================================================================
    File Name: DragAndDropMultipleLists.vue
    Description: Drag and Drop to multiple lists
    ----------------------------------------------------------------------------------------
    Item Name: Tripcarte.Asia Dashboard Management Portal
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="BARCODE" code-toggler>

      <vs-button class="ml-auto mt-2">Start Scanning</vs-button>
        <p></p>
        <p>Or</p>


            </div>

        </div>

        <!-- List 2 -->
        <div class="vx-row">
            <div class="vx-col w-full md:w-1/2">
                <prism language="js" class="rounded-lg">
Enter Barcode:
                </prism>
            </div>
        </div>

        <template slot="codeContainer">
        </template>
    </vx-card>
</template>

<script>
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'

export default {
    data() {
        return {
            list1: [
                {
                    name: "Paz Joya",
                    email: "girliness@spotlike.co.uk",
                },
                {
                    name: "Sunshine Cose",
                    email: "executrixship@equisized.edu",
                },
                {
                    name: "Alba Dobbin",
                    email: "bidding@demibob.or",
                },
                {
                    name: "Marlin Hinchee",
                    email: "preholding@scuffly.co.uk",
                }
            ],
            list2: [
                {
                    name: "Leia Atienza",
                    email: "unmeasurableness@interlamellar.co.uk"
                },
                {
                    name: "Lashawna Vaudrainm",
                    email: "soaking@khubber.com"
                },
                {
                    name: "Liliana Henscheid",
                    email: "lecideine@turndown.org"
                },
                {
                    name: "Keven Kolter",
                    email: "nontenure@anglicanum.co.uk"
                }
            ]
        }
    },
    components: {
        draggable,
        Prism
    }
}
</script>
